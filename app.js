// DSA Mastery Application Controller
document.addEventListener("DOMContentLoaded", () => {
    // 1. STATE MANAGEMENT
    let userProgress = {}; // Key: questionId, Value: { status, notes, lastSolved, confidence, reviewCount, nextReview }
    let activePattern = "all";
    let activeWeek = "all";
    let activeStatus = "all";
    let activeDifficulty = "all";
    let searchQuery = "";
    let activeSort = "id-asc";
    let expandedQuestions = new Set(); // Store IDs of questions with open notes drawers
    let debounceTimers = {}; // Store debouncing timers for auto-saving notes

    // 2. DOM ELEMENTS
    const sidebar = document.getElementById("appSidebar");
    const menuToggleBtn = document.getElementById("menuToggleBtn");
    const mobileCloseBtn = document.getElementById("mobileCloseBtn");
    const patternsListContainer = document.getElementById("patternsList");
    const activePatternsCount = document.getElementById("activePatternsCount");
    const questionsTableBody = document.getElementById("questionsTableBody");
    const showingCountInfo = document.getElementById("showingCountInfo");
    const emptyState = document.getElementById("emptyState");
    const emptyStateResetBtn = document.getElementById("emptyStateResetBtn");
    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");
    const difficultyFilter = document.getElementById("difficultyFilter");
    const sortBySelector = document.getElementById("sortBySelector");
    const activeFiltersContainer = document.getElementById("activeFiltersContainer");
    const activeFiltersRow = document.getElementById("activeFiltersRow");
    const btnResetFilters = document.getElementById("btnResetFilters");
    
    // Status Tabs
    const tabAll = document.getElementById("tab-status-all");
    const tabTodo = document.getElementById("tab-status-todo");
    const tabInProgress = document.getElementById("tab-status-inprogress");
    const tabDone = document.getElementById("tab-status-done");
    const cardDueToday = document.getElementById("cardDueToday");

    // Stats Elements
    const masteryPercent = document.getElementById("masteryPercent");
    const masteryProgressFill = document.getElementById("masteryProgressFill");
    const completionRatio = document.getElementById("completionRatio");
    const dueCount = document.getElementById("dueCount");
    const avgConfidence = document.getElementById("avgConfidence");
    const streakCount = document.getElementById("streakCount");
    const easyRatio = document.getElementById("easyRatio");
    const mediumRatio = document.getElementById("mediumRatio");
    const hardRatio = document.getElementById("hardRatio");
    const easyProgressFill = document.getElementById("easyProgressFill");
    const mediumProgressFill = document.getElementById("mediumProgressFill");
    const hardProgressFill = document.getElementById("hardProgressFill");

    // Modals
    const backupModal = document.getElementById("backupModal");
    const btnBackup = document.getElementById("btnBackup");
    const closeBackupModalBtn = document.getElementById("closeBackupModalBtn");
    const btnExportJSON = document.getElementById("btnExportJSON");
    const btnTriggerImport = document.getElementById("btnTriggerImport");
    const importFileInput = document.getElementById("importFileInput");
    const importFileName = document.getElementById("importFileName");
    const btnImportJSON = document.getElementById("btnImportJSON");
    const btnFactoryReset = document.getElementById("btnFactoryReset");

    const hintModal = document.getElementById("hintModal");
    const closeHintModalBtn = document.getElementById("closeHintModalBtn");
    const hintModalTitle = document.getElementById("hintModalTitle");
    const hintModalPattern = document.getElementById("hintModalPattern");
    const hintModalText = document.getElementById("hintModalText");
    const hintModalLink = document.getElementById("hintModalLink");

    // 3. INITIALIZATION & STORAGE
    function loadProgress() {
        const stored = localStorage.getItem("dsa_user_progress");
        if (stored) {
            try {
                userProgress = JSON.parse(stored);
            } catch (e) {
                console.error("Error parsing progress from localStorage:", e);
                userProgress = {};
            }
        } else {
            userProgress = {};
        }

        // Standardize structure for all 339 questions
        QUESTIONS.forEach(q => {
            if (!userProgress[q.id]) {
                userProgress[q.id] = createDefaultProgress();
            } else {
                // Ensure all fields exist
                userProgress[q.id] = {
                    status: userProgress[q.id].status || "Todo",
                    notes: userProgress[q.id].notes || "",
                    lastSolved: userProgress[q.id].lastSolved || null,
                    confidence: userProgress[q.id].confidence || 0,
                    reviewCount: userProgress[q.id].reviewCount || 0,
                    nextReview: userProgress[q.id].nextReview || null
                };
            }
        });
        saveProgress();
    }

    function createDefaultProgress() {
        return {
            status: "Todo",
            notes: "",
            lastSolved: null,
            confidence: 0,
            reviewCount: 0,
            nextReview: null
        };
    }

    function saveProgress() {
        localStorage.setItem("dsa_user_progress", JSON.stringify(userProgress));
    }

    // 4. SPACED REPETITION LOGIC
    // Calculate review intervals based on confidence rating (1-5)
    // 1 -> 1 day, 2 -> 3 days, 3 -> 7 days, 4 -> 14 days, 5 -> 30 days
    function calculateNextReview(confidence) {
        const now = new Date();
        const intervals = {
            1: 1,      // 1 day
            2: 3,      // 3 days
            3: 7,      // 7 days
            4: 14,     // 14 days
            5: 30      // 30 days
        };
        const days = intervals[confidence] || 1;
        
        // Add days
        now.setDate(now.getDate() + days);
        // Set time to end of day/standard time for uniform reviews
        now.setHours(23, 59, 59, 999);
        return now.getTime();
    }

    // Check if review is due or overdue
    function getDueState(qId) {
        const prog = userProgress[qId];
        if (prog.status !== "Done" || !prog.nextReview) {
            return "notstarted";
        }
        
        const now = Date.now();
        if (now >= prog.nextReview) {
            return "due";
        }
        return "upcoming";
    }

    // Format dates nicely
    function formatDate(timestamp) {
        if (!timestamp) return "-";
        const date = new Date(timestamp);
        return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: '2-digit' });
    }

    // 5. STREAK TRACKING
    function calculateStreak() {
        const solvedDates = new Set();
        
        // Extract all unique days when a problem was solved
        Object.values(userProgress).forEach(p => {
            if (p.lastSolved) {
                const dateStr = new Date(p.lastSolved).toDateString();
                solvedDates.add(dateStr);
            }
        });
        
        if (solvedDates.size === 0) return 0;
        
        let streak = 0;
        let checkDate = new Date();
        
        // Check if solved today
        if (solvedDates.has(checkDate.toDateString())) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
            while (solvedDates.has(checkDate.toDateString())) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            }
        } else {
            // Check if solved yesterday (if user hasn't solved today yet, streak is still alive)
            checkDate.setDate(checkDate.getDate() - 1);
            if (solvedDates.has(checkDate.toDateString())) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
                while (solvedDates.has(checkDate.toDateString())) {
                    streak++;
                    checkDate.setDate(checkDate.getDate() - 1);
                }
            }
        }
        
        return streak;
    }

    // 6. STATISTICS GENERATOR
    function updateStats() {
        let totalCount = QUESTIONS.length;
        let completedCount = 0;
        let dueTodayCount = 0;
        let confidenceSum = 0;
        let confidenceCount = 0;
        
        let diffStats = {
            Easy: { total: 0, solved: 0 },
            Medium: { total: 0, solved: 0 },
            Hard: { total: 0, solved: 0 }
        };

        QUESTIONS.forEach(q => {
            const prog = userProgress[q.id];
            const isSolved = prog.status === "Done";
            
            // Increment difficulty counts
            diffStats[q.difficulty].total++;
            if (isSolved) {
                completedCount++;
                diffStats[q.difficulty].solved++;
            }
            
            // Check due status
            if (isSolved && prog.nextReview) {
                if (Date.now() >= prog.nextReview) {
                    dueTodayCount++;
                }
            }

            // Average confidence
            if (prog.confidence > 0) {
                confidenceSum += prog.confidence;
                confidenceCount++;
            }
        });

        // Calculate rates
        const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
        const avgConf = confidenceCount > 0 ? (confidenceSum / confidenceCount).toFixed(1) : "0.0";
        const currentStreak = calculateStreak();

        // Update DOM elements
        masteryPercent.textContent = `${progressPercent}%`;
        masteryProgressFill.style.width = `${progressPercent}%`;
        completionRatio.textContent = `${completedCount} / ${totalCount} Solved`;
        dueCount.textContent = dueTodayCount;
        avgConfidence.textContent = avgConf;
        streakCount.textContent = `${currentStreak} Day${currentStreak === 1 ? '' : 's'} Streak`;

        // Style due card if there are due reviews
        if (dueTodayCount > 0) {
            cardDueToday.classList.add("due-active");
        } else {
            cardDueToday.classList.remove("due-active");
        }

        // Difficulty Bars
        easyRatio.textContent = `${diffStats.Easy.solved}/${diffStats.Easy.total}`;
        mediumRatio.textContent = `${diffStats.Medium.solved}/${diffStats.Medium.total}`;
        hardRatio.textContent = `${diffStats.Hard.solved}/${diffStats.Hard.total}`;

        const easyPct = diffStats.Easy.total > 0 ? (diffStats.Easy.solved / diffStats.Easy.total) * 100 : 0;
        const mediumPct = diffStats.Medium.total > 0 ? (diffStats.Medium.solved / diffStats.Medium.total) * 100 : 0;
        const hardPct = diffStats.Hard.total > 0 ? (diffStats.Hard.solved / diffStats.Hard.total) * 100 : 0;

        easyProgressFill.style.width = `${easyPct}%`;
        mediumProgressFill.style.width = `${mediumPct}%`;
        hardProgressFill.style.width = `${hardPct}%`;

        // Update Pattern Completion Badges in Sidebar
        renderPatternsList();
    }

    // 7. RENDER PATTERNS LIST IN SIDEBAR
    function renderPatternsList() {
        // Collect unique patterns and calculate counts
        const patternMap = {};
        QUESTIONS.forEach(q => {
            if (!patternMap[q.pattern]) {
                patternMap[q.pattern] = { total: 0, solved: 0 };
            }
            patternMap[q.pattern].total++;
            if (userProgress[q.id].status === "Done") {
                patternMap[q.pattern].solved++;
            }
        });

        const sortedPatterns = Object.keys(patternMap).sort();
        activePatternsCount.textContent = `${sortedPatterns.length} Patterns`;

        patternsListContainer.innerHTML = "";
        
        sortedPatterns.forEach(patternName => {
            const stats = patternMap[patternName];
            const isCompleted = stats.solved === stats.total;
            const isCurrentActive = activePattern === patternName;

            const item = document.createElement("div");
            item.className = `pattern-nav-item ${isCurrentActive ? 'active' : ''} ${isCompleted ? 'completed-pattern' : ''}`;
            item.dataset.pattern = patternName;
            
            const nameSpan = document.createElement("span");
            nameSpan.className = "pattern-nav-name";
            nameSpan.textContent = patternName;
            nameSpan.title = patternName;
            
            const badge = document.createElement("span");
            badge.className = "pattern-badge";
            badge.textContent = `${stats.solved}/${stats.total}`;

            item.appendChild(nameSpan);
            item.appendChild(badge);

            item.addEventListener("click", () => {
                // If clicking the active pattern, toggle it off to show all
                if (activePattern === patternName) {
                    activePattern = "all";
                } else {
                    activePattern = patternName;
                    // Reset week filter when focusing on a specific pattern to avoid empty results
                    activeWeek = "all";
                    updateWeekButtons();
                }
                updateFilterUI();
                renderTable();
            });

            patternsListContainer.appendChild(item);
        });
    }

    // 8. RENDER QUESTIONS TABLE
    function renderTable() {
        // Filter questions
        let filtered = QUESTIONS.filter(q => {
            const prog = userProgress[q.id];
            
            // Filter by Pattern
            if (activePattern !== "all" && q.pattern !== activePattern) return false;
            
            // Filter by Week
            if (activeWeek !== "all" && q.week !== parseInt(activeWeek)) return false;
            
            // Filter by Difficulty
            if (activeDifficulty !== "all" && q.difficulty !== activeDifficulty) return false;
            
            // Filter by Status
            if (activeStatus !== "all") {
                if (activeStatus === "todo" && prog.status !== "Todo") return false;
                if (activeStatus === "inprogress" && prog.status !== "In Progress") return false;
                if (activeStatus === "done" && prog.status !== "Done") return false;
                if (activeStatus === "due") {
                    // Due today or overdue
                    if (prog.status !== "Done" || !prog.nextReview || Date.now() < prog.nextReview) return false;
                }
                if (activeStatus === "overdue") {
                    // Overdue by at least 1 day
                    if (prog.status !== "Done" || !prog.nextReview) return false;
                    const endOfToday = new Date();
                    endOfToday.setHours(23, 59, 59, 999);
                    if (prog.nextReview >= endOfToday.getTime()) return false;
                }
            }
            
            // Filter by Search Query
            if (searchQuery) {
                const searchLower = searchQuery.toLowerCase();
                const titleMatch = q.question.toLowerCase().includes(searchLower);
                const patternMatch = q.pattern.toLowerCase().includes(searchLower);
                const noteMatch = (prog.notes || "").toLowerCase().includes(searchLower);
                const idMatch = q.id.toString() === searchLower;
                
                if (!titleMatch && !patternMatch && !noteMatch && !idMatch) return false;
            }
            
            return true;
        });

        // Sort questions
        filtered.sort((a, b) => {
            const progA = userProgress[a.id];
            const progB = userProgress[b.id];
            
            switch (activeSort) {
                case "id-asc":
                    return a.id - b.id;
                
                case "difficulty-asc":
                    const diffWeights = { "Easy": 1, "Medium": 2, "Hard": 3 };
                    if (diffWeights[a.difficulty] !== diffWeights[b.difficulty]) {
                        return diffWeights[a.difficulty] - diffWeights[b.difficulty];
                    }
                    return a.id - b.id;
                    
                case "confidence-asc":
                    const confA = progA.confidence || 0;
                    const confB = progB.confidence || 0;
                    if (confA !== confB) return confA - confB;
                    return a.id - b.id;
                    
                case "confidence-desc":
                    const cA = progA.confidence || 0;
                    const cB = progB.confidence || 0;
                    if (cA !== cB) return cB - cA;
                    return a.id - b.id;
                    
                case "nextreview-asc":
                    const revA = progA.nextReview || Infinity;
                    const revB = progB.nextReview || Infinity;
                    if (revA !== revB) return revA - revB;
                    return a.id - b.id;
                    
                case "week-asc":
                    if (a.week !== b.week) return a.week - b.week;
                    return a.id - b.id;
                    
                default:
                    return a.id - b.id;
            }
        });

        // Update showing count
        showingCountInfo.textContent = `Showing ${filtered.length} of ${QUESTIONS.length} questions`;
        
        if (filtered.length === 0) {
            questionsTableBody.innerHTML = "";
            emptyState.style.display = "flex";
            return;
        }
        
        emptyState.style.display = "none";
        
        // Generate rows HTML
        const fragment = document.createDocumentFragment();
        
        filtered.forEach(q => {
            const prog = userProgress[q.id];
            const isExpanded = expandedQuestions.has(q.id);
            const dueState = getDueState(q.id);
            
            // 1. MAIN ROW
            const tr = document.createElement("tr");
            tr.className = `question-row-master ${isExpanded ? 'expanded' : ''} ${prog.status === 'Done' ? 'completed-row' : ''}`;
            tr.id = `q-row-${q.id}`;
            
            // Col ID
            const tdId = document.createElement("td");
            tdId.className = "col-id";
            tdId.textContent = q.id;
            tr.appendChild(tdId);
            
            // Col Question
            const tdQuestion = document.createElement("td");
            tdQuestion.className = "col-question";
            
            const titleWrapper = document.createElement("div");
            titleWrapper.className = "question-title-wrapper";
            
            const qTitle = document.createElement("span");
            qTitle.className = "question-text-title";
            qTitle.textContent = q.question;
            titleWrapper.appendChild(qTitle);
            
            const metaRow = document.createElement("div");
            metaRow.className = "question-meta-row";
            
            const patternTag = document.createElement("span");
            patternTag.className = "pattern-badge-tag";
            patternTag.textContent = q.pattern;
            metaRow.appendChild(patternTag);
            
            const weekTag = document.createElement("span");
            weekTag.className = "week-badge-tag";
            weekTag.textContent = `Week ${q.week}`;
            metaRow.appendChild(weekTag);
            
            titleWrapper.appendChild(metaRow);
            tdQuestion.appendChild(titleWrapper);
            tr.appendChild(tdQuestion);
            
            // Col Difficulty
            const tdDifficulty = document.createElement("td");
            tdDifficulty.className = "col-difficulty";
            const diffSpan = document.createElement("span");
            diffSpan.className = `diff-badge ${q.difficulty.toLowerCase()}`;
            diffSpan.textContent = q.difficulty;
            tdDifficulty.appendChild(diffSpan);
            tr.appendChild(tdDifficulty);
            
            // Col Status
            const tdStatus = document.createElement("td");
            tdStatus.className = "col-status";
            
            const selectWrapper = document.createElement("div");
            selectWrapper.className = "status-select-wrapper";
            
            const select = document.createElement("select");
            select.id = `select-status-${q.id}`;
            select.className = `status-${prog.status.replace(" ", "").toLowerCase()}`;
            
            const optTodo = document.createElement("option");
            optTodo.value = "Todo";
            optTodo.textContent = "Todo";
            optTodo.selected = prog.status === "Todo";
            select.appendChild(optTodo);
            
            const optProgress = document.createElement("option");
            optProgress.value = "In Progress";
            optProgress.textContent = "In Progress";
            optProgress.selected = prog.status === "In Progress";
            select.appendChild(optProgress);
            
            const optDone = document.createElement("option");
            optDone.value = "Done";
            optDone.textContent = "Done";
            optDone.selected = prog.status === "Done";
            select.appendChild(optDone);
            
            select.addEventListener("change", (e) => {
                updateQuestionStatus(q.id, e.target.value);
            });
            
            selectWrapper.appendChild(select);
            tdStatus.appendChild(selectWrapper);
            tr.appendChild(tdStatus);
            
            // Col Spaced Repetition
            const tdRep = document.createElement("td");
            tdRep.className = "col-repetition";
            
            const repBox = document.createElement("div");
            repBox.className = "repetition-data-box";
            
            const dueBadge = document.createElement("span");
            dueBadge.className = `due-state-badge ${dueState}`;
            
            if (dueState === "due") {
                dueBadge.innerHTML = `
                    <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12" style="margin-right: 2px;">
                        <path fill-rule="evenodd" d="M8.485 3.66a1.72 1.72 0 012.985 0l6.078 10.457A1.72 1.72 0 0116.038 17H3.962a1.72 1.72 0 01-1.493-2.583L8.485 3.66zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg> Review Due`;
            } else if (dueState === "upcoming") {
                dueBadge.innerHTML = `
                    <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12" style="margin-right: 2px;">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg> Active`;
            } else {
                dueBadge.textContent = "Not Tracked";
            }
            repBox.appendChild(dueBadge);
            
            const datesDiv = document.createElement("div");
            datesDiv.className = "review-info-dates";
            datesDiv.innerHTML = `
                <span>Solved: <strong>${prog.lastSolved ? formatDate(prog.lastSolved) : 'Never'}</strong> (${prog.reviewCount}x)</span>
                <span>Review: <strong>${prog.nextReview ? formatDate(prog.nextReview) : '-'}</strong></span>
            `;
            repBox.appendChild(datesDiv);
            
            // Star rating inside row
            const starsBar = document.createElement("div");
            starsBar.className = "confidence-rating-bar";
            starsBar.title = "Self-Confidence Score (Rates Spaced Repetition)";
            
            for (let stars = 1; stars <= 5; stars++) {
                const starBtn = document.createElement("button");
                starBtn.className = `rating-star-btn ${prog.confidence >= stars ? 'active' : ''}`;
                starBtn.innerHTML = `
                    <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                `;
                starBtn.addEventListener("click", () => {
                    updateQuestionConfidence(q.id, stars);
                });
                starsBar.appendChild(starBtn);
            }
            repBox.appendChild(starsBar);
            
            tdRep.appendChild(repBox);
            tr.appendChild(tdRep);
            
            // Col Actions
            const tdActions = document.createElement("td");
            tdActions.className = "col-actions";
            
            const actionsDiv = document.createElement("div");
            actionsDiv.className = "actions-buttons-row";
            
            // Notes Button
            const btnNotes = document.createElement("button");
            btnNotes.className = `action-icon-btn notes-btn ${isExpanded ? 'active' : ''} ${prog.notes ? 'has-notes' : ''}`;
            btnNotes.id = `btn-notes-toggle-${q.id}`;
            btnNotes.title = prog.notes ? "Edit Notes (Has Notes)" : "Add Notes & View Solution Hints";
            btnNotes.innerHTML = `
                <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
            `;
            btnNotes.addEventListener("click", () => {
                toggleNotesDrawer(q.id);
            });
            actionsDiv.appendChild(btnNotes);
            
            // External LeetCode/GFG Link Button
            const btnLink = document.createElement("a");
            btnLink.href = q.link;
            btnLink.target = "_blank";
            btnLink.className = "action-icon-btn link-btn";
            btnLink.title = `Solve on external site: ${q.link.includes("leetcode.com") ? 'LeetCode' : 'GeeksforGeeks'}`;
            btnLink.innerHTML = `
                <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
            `;
            actionsDiv.appendChild(btnLink);
            
            tdActions.appendChild(actionsDiv);
            tr.appendChild(tdActions);
            fragment.appendChild(tr);
            
            // 2. NOTES DRAWER ROW (HIDDEN BY DEFAULT)
            const trDrawer = document.createElement("tr");
            trDrawer.className = "notes-drawer-row";
            trDrawer.id = `drawer-row-${q.id}`;
            trDrawer.style.display = isExpanded ? "table-row" : "none";
            
            const tdDrawer = document.createElement("td");
            tdDrawer.colSpan = 6;
            
            const contentBox = document.createElement("div");
            contentBox.className = "drawer-content-box";
            contentBox.id = `drawer-content-${q.id}`;
            contentBox.style.height = isExpanded ? "auto" : "0px";
            
            const innerGrid = document.createElement("div");
            innerGrid.className = "drawer-inner-grid";
            
            // Notes Panel (Left side of drawer)
            const editorPanel = document.createElement("div");
            editorPanel.className = "notes-editor-panel";
            
            const panelHeader = document.createElement("div");
            panelHeader.className = "panel-header-row";
            
            const panelTitle = document.createElement("div");
            panelTitle.className = "panel-title";
            panelTitle.innerHTML = `
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
                </svg> My Review Notes`;
            panelHeader.appendChild(panelTitle);
            
            const saveIndicator = document.createElement("span");
            saveIndicator.className = "save-indicator";
            saveIndicator.id = `save-indicator-${q.id}`;
            saveIndicator.textContent = prog.notes ? "Draft saved locally" : "Empty note";
            panelHeader.appendChild(saveIndicator);
            
            editorPanel.appendChild(panelHeader);
            
            const textarea = document.createElement("textarea");
            textarea.className = "notes-textarea";
            textarea.placeholder = "Write your key patterns, bugs encountered, or complex corner cases here... (Autosaves)";
            textarea.value = prog.notes;
            textarea.id = `notes-textarea-${q.id}`;
            textarea.addEventListener("input", (e) => {
                debouncedSaveNotes(q.id, e.target.value);
            });
            textarea.addEventListener("blur", (e) => {
                saveNotesImmediate(q.id, e.target.value);
            });
            editorPanel.appendChild(textarea);
            
            innerGrid.appendChild(editorPanel);
            
            // Hint / Code Template Panel (Right side of drawer)
            const hintPanel = document.createElement("div");
            hintPanel.className = "drawer-hint-panel";
            
            const hintTitle = document.createElement("div");
            hintTitle.className = "panel-title";
            hintTitle.innerHTML = `
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg> Solution Summary`;
            hintPanel.appendChild(hintTitle);
            
            const hintCard = document.createElement("div");
            hintCard.className = "hint-body-card";
            
            const hintText = document.createElement("div");
            hintText.className = "hint-text-summary";
            hintText.textContent = q.solution || "No hints available.";
            hintCard.appendChild(hintText);
            
            const hintBtnLink = document.createElement("a");
            hintBtnLink.href = q.link;
            hintBtnLink.target = "_blank";
            hintBtnLink.className = "hint-solve-link";
            hintBtnLink.innerHTML = `Solve Problem <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>`;
            hintCard.appendChild(hintBtnLink);
            
            hintPanel.appendChild(hintCard);
            innerGrid.appendChild(hintPanel);
            
            contentBox.appendChild(innerGrid);
            tdDrawer.appendChild(contentBox);
            trDrawer.appendChild(tdDrawer);
            fragment.appendChild(trDrawer);
        });
        
        questionsTableBody.innerHTML = "";
        questionsTableBody.appendChild(fragment);
    }

    // 9. UPDATE DATA ACTIONS
    function updateQuestionStatus(qId, status) {
        userProgress[qId].status = status;
        
        // If transitioning to Done, trigger confidence calculation
        if (status === "Done") {
            userProgress[qId].lastSolved = Date.now();
            userProgress[qId].reviewCount = (userProgress[qId].reviewCount || 0) + 1;
            
            // Set confidence to a default 3 if they haven't rated it yet
            if (userProgress[qId].confidence === 0) {
                userProgress[qId].confidence = 3;
            }
            userProgress[qId].nextReview = calculateNextReview(userProgress[qId].confidence);
        } else {
            // If marking back to Todo/In Progress, we clear review timelines
            userProgress[qId].nextReview = null;
        }
        
        saveProgress();
        updateStats();
        renderTable();
    }

    function updateQuestionConfidence(qId, confidence) {
        userProgress[qId].confidence = confidence;
        userProgress[qId].status = "Done";
        userProgress[qId].lastSolved = Date.now();
        userProgress[qId].reviewCount = (userProgress[qId].reviewCount || 0) + 1;
        userProgress[qId].nextReview = calculateNextReview(confidence);
        
        saveProgress();
        updateStats();
        renderTable();
    }

    // Debounced and Immediate Save for Notes
    function debouncedSaveNotes(qId, val) {
        const indicator = document.getElementById(`save-indicator-${qId}`);
        if (indicator) {
            indicator.textContent = "Typing... saving soon";
        }
        
        clearTimeout(debounceTimers[qId]);
        debounceTimers[qId] = setTimeout(() => {
            saveNotesImmediate(qId, val);
        }, 800);
    }

    function saveNotesImmediate(qId, val) {
        clearTimeout(debounceTimers[qId]);
        userProgress[qId].notes = val;
        saveProgress();
        
        const indicator = document.getElementById(`save-indicator-${qId}`);
        if (indicator) {
            indicator.textContent = val ? "Saved locally" : "Empty note";
        }
        
        // Update the notes button class in the row to show it has notes
        const btnNotes = document.getElementById(`btn-notes-toggle-${qId}`);
        if (btnNotes) {
            if (val) {
                btnNotes.classList.add("has-notes");
                btnNotes.title = "Edit Notes (Has Notes)";
            } else {
                btnNotes.classList.remove("has-notes");
                btnNotes.title = "Add Notes & View Solution Hints";
            }
        }
    }

    // Toggle Expandable Notes Drawer
    function toggleNotesDrawer(qId) {
        const mainRow = document.getElementById(`q-row-${qId}`);
        const drawerRow = document.getElementById(`drawer-row-${qId}`);
        const contentBox = document.getElementById(`drawer-content-${qId}`);
        const notesBtn = document.getElementById(`btn-notes-toggle-${qId}`);
        
        if (expandedQuestions.has(qId)) {
            // Collapse
            expandedQuestions.delete(qId);
            mainRow.classList.remove("expanded");
            notesBtn.classList.remove("active");
            
            contentBox.style.height = "0px";
            setTimeout(() => {
                if (!expandedQuestions.has(qId)) {
                    drawerRow.style.display = "none";
                }
            }, 250);
        } else {
            // Expand
            expandedQuestions.add(qId);
            mainRow.classList.add("expanded");
            notesBtn.classList.add("active");
            
            drawerRow.style.display = "table-row";
            
            // Force reflow
            contentBox.getBoundingClientRect();
            contentBox.style.height = "auto";
            
            // Adjust height dynamically to fit content
            const height = contentBox.scrollHeight;
            contentBox.style.height = `${height}px`;
            setTimeout(() => {
                if (expandedQuestions.has(qId)) {
                    contentBox.style.height = "auto"; // Unlock height after transition
                }
            }, 250);
        }
    }

    // 10. WEEKS SELECTOR ACTIONS
    const weekButtons = document.querySelectorAll(".week-btn");
    weekButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            activeWeek = btn.dataset.week;
            updateWeekButtons();
            
            // Reset active pattern when filtering by a week to avoid cross-filtering voids
            activePattern = "all";
            
            updateFilterUI();
            renderTable();
        });
    });

    function updateWeekButtons() {
        weekButtons.forEach(btn => {
            if (btn.dataset.week === activeWeek) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    // 11. STATUS TABS ACTIONS
    const statusTabs = [tabAll, tabTodo, tabInProgress, tabDone];
    statusTabs.forEach(tab => {
        if (tab) {
            tab.addEventListener("click", () => {
                statusTabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                activeStatus = tab.dataset.status;
                updateFilterUI();
                renderTable();
            });
        }
    });

    // Due Today click filter
    cardDueToday.addEventListener("click", () => {
        statusTabs.forEach(t => t.classList.remove("active"));
        tabAll.classList.add("active"); // Put status tab to All (or we can select it)
        activeStatus = "due";
        updateFilterUI();
        renderTable();
    });

    // 12. SEARCH & SELECT FILTERS EVENTS
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        if (searchQuery) {
            clearSearchBtn.style.display = "block";
        } else {
            clearSearchBtn.style.display = "none";
        }
        updateFilterUI();
        renderTable();
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        updateFilterUI();
        renderTable();
    });

    difficultyFilter.addEventListener("change", (e) => {
        activeDifficulty = e.target.value;
        updateFilterUI();
        renderTable();
    });

    sortBySelector.addEventListener("change", (e) => {
        activeSort = e.target.value;
        renderTable();
    });

    // Reset Filters Actions
    btnResetFilters.addEventListener("click", resetAllFilters);
    emptyStateResetBtn.addEventListener("click", resetAllFilters);

    function resetAllFilters() {
        activePattern = "all";
        activeWeek = "all";
        activeStatus = "all";
        activeDifficulty = "all";
        searchQuery = "";
        
        searchInput.value = "";
        clearSearchBtn.style.display = "none";
        difficultyFilter.value = "all";
        
        // Reset status tabs
        statusTabs.forEach(t => t.classList.remove("active"));
        tabAll.classList.add("active");
        
        // Reset week buttons
        updateWeekButtons();
        
        updateFilterUI();
        renderTable();
    }

    // Update the visual filter badges row
    function updateFilterUI() {
        let activeBadges = [];

        if (activePattern !== "all") {
            activeBadges.push({ label: `Pattern: ${activePattern}`, type: "pattern" });
        }
        if (activeWeek !== "all") {
            activeBadges.push({ label: `Week ${activeWeek}`, type: "week" });
        }
        if (activeDifficulty !== "all") {
            activeBadges.push({ label: `Difficulty: ${activeDifficulty}`, type: "difficulty" });
        }
        if (activeStatus !== "all") {
            const statusLabels = {
                todo: "Status: Todo",
                inprogress: "Status: In Progress",
                done: "Status: Done",
                due: "Spaced Rep: Review Due"
            };
            activeBadges.push({ label: statusLabels[activeStatus], type: "status" });
        }
        if (searchQuery) {
            activeBadges.push({ label: `Search: "${searchQuery}"`, type: "search" });
        }

        activeFiltersRow.innerHTML = "";
        
        if (activeBadges.length > 0) {
            activeFiltersContainer.style.display = "flex";
            activeBadges.forEach(badge => {
                const span = document.createElement("span");
                span.className = "filter-badge";
                span.textContent = badge.label;
                
                const removeBtn = document.createElement("button");
                removeBtn.className = "filter-badge-remove";
                removeBtn.innerHTML = "&times;";
                removeBtn.addEventListener("click", () => {
                    removeFilter(badge.type);
                });
                
                span.appendChild(removeBtn);
                activeFiltersRow.appendChild(span);
            });
        } else {
            activeFiltersContainer.style.display = "none";
        }
        
        // Rerender sidebar patterns list to highlight active
        renderPatternsList();
    }

    function removeFilter(type) {
        if (type === "pattern") activePattern = "all";
        if (type === "week") {
            activeWeek = "all";
            updateWeekButtons();
        }
        if (type === "difficulty") {
            activeDifficulty = "all";
            difficultyFilter.value = "all";
        }
        if (type === "status") {
            activeStatus = "all";
            statusTabs.forEach(t => t.classList.remove("active"));
            tabAll.classList.add("active");
        }
        if (type === "search") {
            searchQuery = "";
            searchInput.value = "";
            clearSearchBtn.style.display = "none";
        }
        
        updateFilterUI();
        renderTable();
    }

    // 13. MODALS LOGIC
    
    // Mobile Sidebar controls
    menuToggleBtn.addEventListener("click", () => {
        sidebar.classList.add("open");
    });
    
    mobileCloseBtn.addEventListener("click", () => {
        sidebar.classList.remove("open");
    });

    // Backup Modal
    btnBackup.addEventListener("click", () => {
        backupModal.classList.add("open");
    });

    closeBackupModalBtn.addEventListener("click", () => {
        backupModal.classList.remove("open");
        resetBackupModalState();
    });

    backupModal.addEventListener("click", (e) => {
        if (e.target === backupModal) {
            backupModal.classList.remove("open");
            resetBackupModalState();
        }
    });

    function resetBackupModalState() {
        importFileInput.value = "";
        importFileName.textContent = "No file chosen";
        btnImportJSON.style.display = "none";
    }

    // Export Backup JSON
    btnExportJSON.addEventListener("click", () => {
        const dataStr = JSON.stringify(userProgress, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `dsa_progress_backup_${new Date().toISOString().slice(0,10)}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    });

    // Import Trigger & File Reading
    btnTriggerImport.addEventListener("click", () => {
        importFileInput.click();
    });

    importFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        importFileName.textContent = file.name;
        btnImportJSON.style.display = "block";
    });

    btnImportJSON.addEventListener("click", () => {
        const file = importFileInput.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const importedData = JSON.parse(event.target.result);
                
                // Basic validation
                if (typeof importedData !== "object" || importedData === null) {
                    alert("Invalid backup file: Must be a JSON object.");
                    return;
                }
                
                // Confirm merge
                if (confirm("Are you sure you want to restore this backup? It will overwrite any matching progress records.")) {
                    // Overwrite local progress
                    userProgress = importedData;
                    saveProgress();
                    
                    // Reload UI
                    loadProgress();
                    updateStats();
                    renderTable();
                    
                    backupModal.classList.remove("open");
                    resetBackupModalState();
                    alert("Progress backup successfully restored!");
                }
            } catch (err) {
                alert("Error reading backup file: " + err.message);
            }
        };
        reader.readAsText(file);
    });

    // Factory Reset Progress
    btnFactoryReset.addEventListener("click", () => {
        if (confirm("CRITICAL WARNING: This will erase all of your custom review notes, confidence ratings, and solve statistics forever. Are you absolutely sure?")) {
            if (confirm("Type 'RESET' in the prompt to confirm factory reset.")) {
                localStorage.removeItem("dsa_user_progress");
                userProgress = {};
                loadProgress();
                updateStats();
                resetAllFilters();
                backupModal.classList.remove("open");
                alert("All progress cleared successfully.");
            }
        }
    });

    // 14. BOOTSTRAP APPLICATION
    loadProgress();
    updateStats();
    resetAllFilters(); // Runs updateFilterUI and renderTable
});

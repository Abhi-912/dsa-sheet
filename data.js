// Dynamic DSA Questions Database generated from DSA_Question_Bank.csv
const QUESTIONS = [
  {
    "id": 1,
    "pattern": "Two Pointers (Converging)",
    "question": "Check whether a string is a palindrome after ignoring case and punctuation.",
    "difficulty": "Easy",
    "week": 1,
    "solution": "Two pointers from both ends. Skip non-alphanumeric. Compare lowercased. O(n).",
    "link": "https://leetcode.com/problems/valid-palindrome/"
  },
  {
    "id": 2,
    "pattern": "Two Pointers (Converging)",
    "question": "Solve two-sum in a sorted array.",
    "difficulty": "Easy",
    "week": 1,
    "solution": "Left and right pointers. Move left if sum < target, move right if sum > target. O(n).",
    "link": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
  },
  {
    "id": 3,
    "pattern": "Two Pointers (Converging)",
    "question": "Find all triplets with sum zero or equal to a target.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Sort. Fix one element, two-pointer on rest. Skip duplicates. O(n\u00b2).",
    "link": "https://leetcode.com/problems/3sum/"
  },
  {
    "id": 4,
    "pattern": "Two Pointers (Converging)",
    "question": "Find all quadruplets with sum equal to a target.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Sort. Fix two elements, two-pointer on rest. Skip duplicates. O(n\u00b3).",
    "link": "https://leetcode.com/problems/4sum/"
  },
  {
    "id": 5,
    "pattern": "Two Pointers (Converging)",
    "question": "Find the container with the most water.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Two pointers from both ends. Move the shorter line inward. Area = min(h) \u00d7 width. O(n).",
    "link": "https://leetcode.com/problems/container-with-most-water/"
  },
  {
    "id": 6,
    "pattern": "Two Pointers (Converging)",
    "question": "Compute trapped rain water.",
    "difficulty": "Hard",
    "week": 1,
    "solution": "Two pointers with leftMax and rightMax. Move from the side with smaller max. O(n) time O(1) space.",
    "link": "https://leetcode.com/problems/trapping-rain-water/"
  },
  {
    "id": 7,
    "pattern": "Two Pointers (Converging)",
    "question": "Remove duplicates from a sorted array in place.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Slow (write) and fast (read) pointers. Write when new element differs. O(n).",
    "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
  },
  {
    "id": 8,
    "pattern": "Two Pointers (Converging)",
    "question": "Move all zeroes to the end while preserving relative order.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Two pointers: one for next non-zero position. Swap non-zero elements forward. O(n).",
    "link": "https://leetcode.com/problems/move-zeroes/"
  },
  {
    "id": 9,
    "pattern": "Two Pointers (Converging)",
    "question": "Merge two sorted arrays in place.",
    "difficulty": "Easy",
    "week": 1,
    "solution": "Start from end of both arrays. Place larger element at back. O(m+n).",
    "link": "https://leetcode.com/problems/merge-sorted-array/"
  },
  {
    "id": 10,
    "pattern": "Two Pointers (Converging)",
    "question": "Return the sorted squares of a sorted array.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Two pointers from both ends. Compare absolute values, fill result array from back. O(n).",
    "link": "https://leetcode.com/problems/squares-of-a-sorted-array/"
  },
  {
    "id": 11,
    "pattern": "Two Pointers (Converging)",
    "question": "Decide whether removing at most one character can make a string a palindrome.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Two pointers. On mismatch, try skipping left or right char and check remaining substring. O(n).",
    "link": "https://leetcode.com/problems/valid-palindrome-ii/"
  },
  {
    "id": 12,
    "pattern": "Two Pointers (Converging)",
    "question": "Find common elements across three sorted arrays in linear time.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Three pointers, one per array. Advance the pointer with the smallest value. O(n1+n2+n3).",
    "link": "https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/"
  },
  {
    "id": 13,
    "pattern": "Two Pointers (Converging)",
    "question": "Merge three sorted arrays into one sorted array with duplicates removed.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Three-pointer merge. Skip duplicates during insertion. O(n1+n2+n3).",
    "link": "https://www.geeksforgeeks.org/merge-3-sorted-arrays/"
  },
  {
    "id": 14,
    "pattern": "Fast & Slow Pointers",
    "question": "Detect a loop in a linked list.",
    "difficulty": "Easy",
    "week": 1,
    "solution": "Slow (1 step) and fast (2 steps). If they meet, cycle exists. O(n) time O(1) space.",
    "link": "https://leetcode.com/problems/linked-list-cycle/"
  },
  {
    "id": 15,
    "pattern": "Fast & Slow Pointers",
    "question": "Find the starting node of the loop in a linked list.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "After detection, reset one pointer to head. Both move 1 step. Meeting point = cycle start.",
    "link": "https://leetcode.com/problems/linked-list-cycle-ii/"
  },
  {
    "id": 16,
    "pattern": "Fast & Slow Pointers",
    "question": "Find the middle node of a linked list.",
    "difficulty": "Easy",
    "week": 1,
    "solution": "Slow and fast pointers. When fast reaches end, slow is at middle. O(n).",
    "link": "https://leetcode.com/problems/middle-of-the-linked-list/"
  },
  {
    "id": 17,
    "pattern": "Fast & Slow Pointers",
    "question": "Remove the nth node from the end.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Two pointers with n gap. When fast reaches end, slow is at (n+1)th from end. O(n) one pass.",
    "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
  },
  {
    "id": 18,
    "pattern": "Fast & Slow Pointers",
    "question": "Check whether a linked list is a palindrome.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Find mid (slow/fast), reverse second half, compare with first half, restore. O(n) time O(1) space.",
    "link": "https://leetcode.com/problems/palindrome-linked-list/"
  },
  {
    "id": 19,
    "pattern": "Fast & Slow Pointers",
    "question": "Find the repeated number (Floyd's on array).",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Treat values as next pointers. Floyd's cycle detection on array. O(n) time O(1) space.",
    "link": "https://leetcode.com/problems/find-the-duplicate-number/"
  },
  {
    "id": 20,
    "pattern": "Sliding Window (Variable)",
    "question": "Find the length of the longest substring without repeating characters.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Expand right, shrink left on duplicate using hashset/map. Track maxLen. O(n).",
    "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
  },
  {
    "id": 21,
    "pattern": "Sliding Window (Variable)",
    "question": "Find the longest substring with at most k distinct characters.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Expand right, shrink left when distinct > k using hashmap of char counts. O(n).",
    "link": "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/"
  },
  {
    "id": 22,
    "pattern": "Sliding Window (Variable)",
    "question": "Find the minimum window substring containing all characters of another string.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Two hashmaps. Expand right until valid. Shrink left while still valid. Track min. O(n+m).",
    "link": "https://leetcode.com/problems/minimum-window-substring/"
  },
  {
    "id": 23,
    "pattern": "Sliding Window (Variable)",
    "question": "Find the maximum consecutive 1s if you may flip at most k zeroes.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Track zero count in window. Shrink left when zeros > k. Track max window size. O(n).",
    "link": "https://leetcode.com/problems/max-consecutive-ones-iii/"
  },
  {
    "id": 24,
    "pattern": "Sliding Window (Variable)",
    "question": "Find the minimum-length subarray with sum at least a target.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Expand right. Shrink left while sum >= target. Track minLen. O(n) for positive nums.",
    "link": "https://leetcode.com/problems/minimum-size-subarray-sum/"
  },
  {
    "id": 25,
    "pattern": "Sliding Window (Variable)",
    "question": "Count the number of subarrays with product less than k.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Expand right, shrink left when product >= k. Count += (right \u2212 left + 1) each step. O(n).",
    "link": "https://leetcode.com/problems/subarray-product-less-than-k/"
  },
  {
    "id": 26,
    "pattern": "Sliding Window (Variable)",
    "question": "Solve Fruit Into Baskets or longest subarray with at most two distinct values.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Sliding window + hashmap. Shrink left when distinct > 2. Same pattern as Q21. O(n).",
    "link": "https://leetcode.com/problems/fruit-into-baskets/"
  },
  {
    "id": 27,
    "pattern": "Sliding Window (Variable)",
    "question": "Find the longest repeating-character window after changing at most k characters.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Track maxFreq in window. Shrink when windowLen \u2212 maxFreq > k. O(n).",
    "link": "https://leetcode.com/problems/longest-repeating-character-replacement/"
  },
  {
    "id": 28,
    "pattern": "Sliding Window (Variable)",
    "question": "Find the minimum swaps needed to group all elements <= k together.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Count elements <= k = window size. Slide fixed window, count bad elements. Min bad = answer.",
    "link": "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/"
  },
  {
    "id": 29,
    "pattern": "Sliding Window (Fixed)",
    "question": "Find the maximum sum or average of a fixed-size window.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Add right element, subtract left element. Track max. O(n).",
    "link": "https://leetcode.com/problems/maximum-average-subarray-i/"
  },
  {
    "id": 30,
    "pattern": "Sliding Window (Fixed)",
    "question": "Find the sliding window maximum using a deque or monotonic queue.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Monotonic decreasing deque. Remove smaller from back, expired from front. O(n).",
    "link": "https://leetcode.com/problems/sliding-window-maximum/"
  },
  {
    "id": 31,
    "pattern": "Sliding Window (Fixed)",
    "question": "Design a moving average over a data stream.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Queue of fixed size. Maintain running sum. Add new, remove old when full. O(1) per add.",
    "link": "https://leetcode.com/problems/moving-average-from-data-stream/"
  },
  {
    "id": 32,
    "pattern": "Sliding Window (Fixed)",
    "question": "Design a hit counter over a moving time window.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Queue of timestamps. Dequeue expired on query. Or circular buffer of size 300. O(1) amortized.",
    "link": "https://leetcode.com/problems/design-hit-counter/"
  },
  {
    "id": 33,
    "pattern": "Prefix Sum + HashMap",
    "question": "Count the number of subarrays whose sum is exactly k.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "prefixSum hashmap. For each sum, check if (sum \u2212 k) exists in map. O(n).",
    "link": "https://leetcode.com/problems/subarray-sum-equals-k/"
  },
  {
    "id": 34,
    "pattern": "Prefix Sum + HashMap",
    "question": "Count the number of subarrays whose sum is divisible by k.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "prefixSum mod k + hashmap. Same remainder \u2192 subarray divisible by k. Handle negative mods.",
    "link": "https://leetcode.com/problems/subarray-sums-divisible-by-k/"
  },
  {
    "id": 35,
    "pattern": "Prefix Sum + HashMap",
    "question": "Count the number of subarrays with equal numbers of 0s and 1s.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Replace 0 with \u22121. Problem becomes 'subarrays with sum 0'. Prefix sum + hashmap. O(n).",
    "link": "https://leetcode.com/problems/contiguous-array/"
  },
  {
    "id": 36,
    "pattern": "Prefix Sum + HashMap",
    "question": "Find the length of the longest zero-sum subarray.",
    "difficulty": "Medium",
    "week": 1,
    "solution": "Prefix sum + hashmap storing first occurrence of each sum. Max length = i \u2212 first[sum]. O(n).",
    "link": "https://www.geeksforgeeks.org/find-the-largest-subarray-with-0-sum/"
  },
  {
    "id": 37,
    "pattern": "Prefix Sum + HashMap",
    "question": "Find an equilibrium or pivot index.",
    "difficulty": "Easy",
    "week": 1,
    "solution": "Compute total. Scan left-to-right: if leftSum == total \u2212 leftSum \u2212 arr[i], found. O(n).",
    "link": "https://leetcode.com/problems/find-pivot-index/"
  },
  {
    "id": 38,
    "pattern": "Prefix Sum + HashMap",
    "question": "Compute the product of array except self.",
    "difficulty": "Easy",
    "week": 1,
    "solution": "Two-pass: prefix products left\u2192right, suffix products right\u2192left. O(n) without division.",
    "link": "https://leetcode.com/problems/product-of-array-except-self/"
  },
  {
    "id": 39,
    "pattern": "HashMap / Counting",
    "question": "Find the intersection of two arrays including handling duplicates.",
    "difficulty": "Easy",
    "week": 2,
    "solution": "HashMap to count elements of one array. Iterate second and decrement. O(m+n).",
    "link": "https://leetcode.com/problems/intersection-of-two-arrays-ii/"
  },
  {
    "id": 40,
    "pattern": "HashMap / Counting",
    "question": "Find the longest consecutive sequence in an unsorted array.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "HashSet. For each num where num\u22121 not in set, count forward. O(n) amortized.",
    "link": "https://leetcode.com/problems/longest-consecutive-sequence/"
  },
  {
    "id": 41,
    "pattern": "HashMap / Counting",
    "question": "Count distinct pairs with difference equal to k.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "HashSet: for each element check if element+k exists. Or sort + two pointers. O(n).",
    "link": "https://leetcode.com/problems/k-diff-pairs-in-an-array/"
  },
  {
    "id": 42,
    "pattern": "HashMap / Counting",
    "question": "Find the first non-repeating character in a string.",
    "difficulty": "Easy",
    "week": 2,
    "solution": "Frequency map pass 1. Pass 2: first char with count 1. O(n).",
    "link": "https://leetcode.com/problems/first-unique-character-in-a-string/"
  },
  {
    "id": 43,
    "pattern": "HashMap / Counting",
    "question": "Determine whether two strings are anagrams.",
    "difficulty": "Easy",
    "week": 2,
    "solution": "Frequency count array of size 26. Increment for s1, decrement for s2. Check all zero. O(n).",
    "link": "https://leetcode.com/problems/valid-anagram/"
  },
  {
    "id": 44,
    "pattern": "HashMap / Counting",
    "question": "Group a list of strings into anagram buckets.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "HashMap with sorted string (or char-frequency tuple) as key. O(n\u00b7k log k).",
    "link": "https://leetcode.com/problems/group-anagrams/"
  },
  {
    "id": 45,
    "pattern": "HashMap / Counting",
    "question": "Count how many distinct strings are possible after exactly one swap.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Try all O(n\u00b2) swaps with a set. Optimize with character frequency analysis.",
    "link": "https://www.geeksforgeeks.org/count-of-distinct-strings-that-can-be-obtained-after-performing-exactly-one-swap/"
  },
  {
    "id": 46,
    "pattern": "HashMap / Counting",
    "question": "Find the top-k frequent elements.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "HashMap for freq + min-heap of size k. Or bucket sort by frequency. O(n log k) or O(n).",
    "link": "https://leetcode.com/problems/top-k-frequent-elements/"
  },
  {
    "id": 47,
    "pattern": "HashMap / Counting",
    "question": "Sort characters by frequency using a heap.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Frequency map + max-heap (or bucket sort). Build string from heap. O(n log k).",
    "link": "https://leetcode.com/problems/sort-characters-by-frequency/"
  },
  {
    "id": 48,
    "pattern": "Kadane's Algorithm",
    "question": "Find the maximum subarray sum.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "currentMax = max(num, currentMax + num). Track globalMax. O(n) time O(1) space.",
    "link": "https://leetcode.com/problems/maximum-subarray/"
  },
  {
    "id": 49,
    "pattern": "Kadane's Algorithm",
    "question": "Find the maximum product subarray.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Track both maxProd and minProd (negatives flip). Reset on zero. O(n).",
    "link": "https://leetcode.com/problems/maximum-product-subarray/"
  },
  {
    "id": 50,
    "pattern": "Kadane's Algorithm",
    "question": "Find the maximum subarray sum with one deletion.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Two arrays: maxEndHere[i] (no deletion) and maxEndHereWithDel[i] (one deletion). O(n).",
    "link": "https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/"
  },
  {
    "id": 51,
    "pattern": "Boyer-Moore Voting",
    "question": "Find the majority element that appears more than n/2 times.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Maintain candidate and count. Increment on match, decrement on mismatch. Last candidate wins. O(n) O(1).",
    "link": "https://leetcode.com/problems/majority-element/"
  },
  {
    "id": 52,
    "pattern": "Boyer-Moore Voting",
    "question": "Find all elements that appear more than n/3 times.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Extended with two candidates. At most 2 such elements. Verify counts in second pass. O(n).",
    "link": "https://leetcode.com/problems/majority-element-ii/"
  },
  {
    "id": 53,
    "pattern": "Cyclic Sort / Index Mapping",
    "question": "Find the first missing positive integer.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Place each num at index num\u22121. First index where arr[i] \u2260 i+1 is answer. O(n) time O(1) space.",
    "link": "https://leetcode.com/problems/first-missing-positive/"
  },
  {
    "id": 54,
    "pattern": "Cyclic Sort / Index Mapping",
    "question": "Find the repeated number and the missing number.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Cyclic sort: place each val at index val\u22121. The misplaced position reveals both numbers.",
    "link": "https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/"
  },
  {
    "id": 55,
    "pattern": "Dutch National Flag",
    "question": "Rearrange a stream of three kinds of objects so equal objects are grouped together.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Three pointers: low, mid, high. Swap mid with low or high based on value. O(n) single pass.",
    "link": "https://leetcode.com/problems/sort-colors/"
  },
  {
    "id": 56,
    "pattern": "Binary Search (Classic)",
    "question": "Find an integer square root or a square root to fixed precision.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Binary search on [0, n]. Check mid\u00d7mid \u2264 n. For precision, float binary search. O(log n).",
    "link": "https://leetcode.com/problems/sqrtx/"
  },
  {
    "id": 57,
    "pattern": "Binary Search (Classic)",
    "question": "Search in a row-wise and column-wise sorted matrix.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Start top-right. Go left if target < current, down if target > current. O(m+n).",
    "link": "https://leetcode.com/problems/search-a-2d-matrix-ii/"
  },
  {
    "id": 58,
    "pattern": "Binary Search (Classic)",
    "question": "Find the first and last occurrence of a target in a sorted array.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Two binary searches: leftmost (continue left on equal) and rightmost (continue right on equal). O(log n).",
    "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
  },
  {
    "id": 59,
    "pattern": "Binary Search (Classic)",
    "question": "Search in a rotated sorted array.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Determine which half is sorted. Check if target lies in sorted half. O(log n).",
    "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
  },
  {
    "id": 60,
    "pattern": "Binary Search (Classic)",
    "question": "Find the minimum element in a rotated sorted array.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Compare mid with right. If mid > right, min is in right half. O(log n).",
    "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
  },
  {
    "id": 61,
    "pattern": "Binary Search (Classic)",
    "question": "Find a peak element.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "If mid < mid+1, peak is right; else left. O(log n).",
    "link": "https://leetcode.com/problems/find-peak-element/"
  },
  {
    "id": 62,
    "pattern": "Binary Search (Classic)",
    "question": "Find the k closest elements in a sorted array.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Binary search for insertion point. Expand outward with two pointers. O(log n + k).",
    "link": "https://leetcode.com/problems/find-k-closest-elements/"
  },
  {
    "id": 63,
    "pattern": "Binary Search (Classic)",
    "question": "Search a value in an infinite or unknown-size sorted array.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Exponential search: double index until exceeding target, then binary search in range. O(log n).",
    "link": "https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/"
  },
  {
    "id": 64,
    "pattern": "Binary Search (Classic)",
    "question": "Find the median of two sorted arrays.",
    "difficulty": "Hard",
    "week": 2,
    "solution": "Binary search on smaller array. Partition both. Check boundary conditions. O(log(min(m,n))).",
    "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/"
  },
  {
    "id": 65,
    "pattern": "Binary Search on Answer",
    "question": "Use binary search on answer to minimize the maximum pages or tasks assigned.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Search on max pages. Feasibility: greedy left\u2192right allocation. O(n log sum).",
    "link": "https://www.geeksforgeeks.org/allocate-minimum-number-pages/"
  },
  {
    "id": 66,
    "pattern": "Binary Search on Answer",
    "question": "Find the kth smallest element in a sorted matrix.",
    "difficulty": "Hard",
    "week": 2,
    "solution": "Binary search on value range [min, max]. Count elements \u2264 mid per row. O(n log(max\u2212min)).",
    "link": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/"
  },
  {
    "id": 67,
    "pattern": "Binary Search on Answer",
    "question": "Maximize the minimum distance between placed items using binary search on answer.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Search on distance. Greedy check: place items left\u2192right with min gap. O(n log range).",
    "link": "https://leetcode.com/problems/magnetic-force-between-two-balls/"
  },
  {
    "id": 68,
    "pattern": "Binary Search on Answer",
    "question": "Find the minimum feasible ship capacity to deliver packages within d days.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Search on capacity [max(w), sum(w)]. Greedy simulate loading. O(n log sum).",
    "link": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"
  },
  {
    "id": 69,
    "pattern": "Binary Search on Answer",
    "question": "Split an array to minimize the largest segment sum.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Search on answer. Check if \u2264 m parts with each \u2264 mid. O(n log sum).",
    "link": "https://leetcode.com/problems/split-array-largest-sum/"
  },
  {
    "id": 70,
    "pattern": "Binary Search on Answer",
    "question": "Find the minimum feasible time to finish trips/jobs/machines using a monotonic predicate.",
    "difficulty": "Medium",
    "week": 2,
    "solution": "Search on time. Check if total work at time t \u2265 required. O(n log maxTime).",
    "link": "https://leetcode.com/problems/minimum-time-to-complete-trips/"
  },
  {
    "id": 71,
    "pattern": "Merge Sort / Divide & Conquer",
    "question": "Count inversions in an array.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Modified merge sort. Count inversions during merge step when left[i] > right[j]. O(n log n).",
    "link": "https://www.geeksforgeeks.org/counting-inversions/"
  },
  {
    "id": 72,
    "pattern": "Merge Sort / Divide & Conquer",
    "question": "Sort a linked list using merge sort.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Find mid (slow/fast), split, recursively sort halves, merge. O(n log n).",
    "link": "https://leetcode.com/problems/sort-list/"
  },
  {
    "id": 73,
    "pattern": "Merge Sort / Divide & Conquer",
    "question": "Find the second largest element in one pass without extra space.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Track two variables: largest and secondLargest. Single pass O(n) O(1) space.",
    "link": "https://www.geeksforgeeks.org/find-second-largest-element-array/"
  },
  {
    "id": 74,
    "pattern": "Next Permutation",
    "question": "Find the next greater number using the same digits.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Find rightmost ascending pair. Swap with smallest larger digit to its right. Reverse suffix. O(n).",
    "link": "https://leetcode.com/problems/next-permutation/"
  },
  {
    "id": 75,
    "pattern": "Monotonic Stack",
    "question": "Find the next greater element for every array item.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Monotonic decreasing stack. Traverse right\u2192left (or left\u2192right). Pop smaller. O(n).",
    "link": "https://leetcode.com/problems/next-greater-element-i/"
  },
  {
    "id": 76,
    "pattern": "Monotonic Stack",
    "question": "Find the next smaller element for every array item.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Monotonic increasing stack. Similar but track smaller elements. O(n).",
    "link": "https://www.geeksforgeeks.org/next-smaller-element/"
  },
  {
    "id": 77,
    "pattern": "Monotonic Stack",
    "question": "Find the largest rectangle in a histogram.",
    "difficulty": "Hard",
    "week": 3,
    "solution": "Monotonic increasing stack of indices. On pop, compute area with popped bar as shortest. O(n).",
    "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
  },
  {
    "id": 78,
    "pattern": "Monotonic Stack",
    "question": "Find the maximal rectangle in a binary matrix.",
    "difficulty": "Hard",
    "week": 3,
    "solution": "Build histogram row by row. Apply largest-rectangle-in-histogram per row. O(m\u00d7n).",
    "link": "https://leetcode.com/problems/maximal-rectangle/"
  },
  {
    "id": 79,
    "pattern": "Monotonic Stack",
    "question": "Solve Daily Temperatures.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Monotonic decreasing stack of indices. On warmer day, pop and record distance. O(n).",
    "link": "https://leetcode.com/problems/daily-temperatures/"
  },
  {
    "id": 80,
    "pattern": "Monotonic Stack",
    "question": "Solve Stock Span.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Monotonic decreasing stack of (price, index). Span = current index \u2212 stack top index. O(n).",
    "link": "https://leetcode.com/problems/online-stock-span/"
  },
  {
    "id": 81,
    "pattern": "Monotonic Stack",
    "question": "Find the next greater element in a circular array.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Traverse array twice (2n). Monotonic stack with index % n. O(n).",
    "link": "https://leetcode.com/problems/next-greater-element-ii/"
  },
  {
    "id": 82,
    "pattern": "Monotonic Stack",
    "question": "Remove k digits to form the smallest possible number.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Monotonic increasing stack. Remove larger digit from top when smaller comes. Greedy. O(n).",
    "link": "https://leetcode.com/problems/remove-k-digits/"
  },
  {
    "id": 83,
    "pattern": "Monotonic Stack",
    "question": "Count square submatrices with all ones.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "DP: dp[i][j] = min(left, up, diagonal) + 1. Sum all dp values. O(m\u00d7n).",
    "link": "https://leetcode.com/problems/count-square-submatrices-with-all-ones/"
  },
  {
    "id": 84,
    "pattern": "Stack Parsing / Simulation",
    "question": "Evaluate a postfix expression.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Push operands. On operator, pop two, compute, push result. O(n).",
    "link": "https://www.geeksforgeeks.org/evaluation-of-postfix-expression/"
  },
  {
    "id": 85,
    "pattern": "Stack Parsing / Simulation",
    "question": "Convert an infix expression to postfix.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Shunting-yard algorithm. Stack for operators. Respect precedence and associativity. O(n).",
    "link": "https://www.geeksforgeeks.org/convert-infix-expression-to-postfix-expression/"
  },
  {
    "id": 86,
    "pattern": "Stack Parsing / Simulation",
    "question": "Evaluate an arithmetic expression with operators and parentheses.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Two stacks (values, operators) or recursive descent. Handle precedence. O(n).",
    "link": "https://leetcode.com/problems/basic-calculator/"
  },
  {
    "id": 87,
    "pattern": "Stack Parsing / Simulation",
    "question": "Check for balanced parentheses or brackets.",
    "difficulty": "Easy",
    "week": 3,
    "solution": "Stack. Push open brackets. Pop on close and check match. Empty stack at end = balanced. O(n).",
    "link": "https://leetcode.com/problems/valid-parentheses/"
  },
  {
    "id": 88,
    "pattern": "Stack Parsing / Simulation",
    "question": "Simplify a Unix-style path.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Split by '/'. Push directory names. Pop on '..'. Ignore '.' and empty. Join with '/'.",
    "link": "https://leetcode.com/problems/simplify-path/"
  },
  {
    "id": 89,
    "pattern": "Stack Parsing / Simulation",
    "question": "Resolve collision-style stack simulations such as Asteroid Collision.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Stack. Positive goes on. Negative collides with positive tops. Resolve by size. O(n).",
    "link": "https://leetcode.com/problems/asteroid-collision/"
  },
  {
    "id": 90,
    "pattern": "Stack Parsing / Simulation",
    "question": "Decode bracket-encoded strings such as 3[a2[c]].",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Stack: push count and current string on '['. On ']', pop, repeat, concatenate. O(output length).",
    "link": "https://leetcode.com/problems/decode-string/"
  },
  {
    "id": 91,
    "pattern": "Stack Parsing / Simulation",
    "question": "Implement a queue using two stacks.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Push to s1. Pop: if s2 empty, transfer all from s1. Pop from s2. Amortized O(1).",
    "link": "https://leetcode.com/problems/implement-queue-using-stacks/"
  },
  {
    "id": 92,
    "pattern": "Stack Parsing / Simulation",
    "question": "Implement a stack using queues.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Push: enqueue, then rotate n\u22121 times. Pop: dequeue. O(n) push or O(n) pop.",
    "link": "https://leetcode.com/problems/implement-stack-using-queues/"
  },
  {
    "id": 93,
    "pattern": "Stack Parsing / Simulation",
    "question": "Design a min stack.",
    "difficulty": "Easy",
    "week": 3,
    "solution": "Two stacks: main + min. Push to min when \u2264 current min. O(1) getMin.",
    "link": "https://leetcode.com/problems/min-stack/"
  },
  {
    "id": 94,
    "pattern": "Stack Parsing / Simulation",
    "question": "Print the first non-repeating character at every step of a character stream.",
    "difficulty": "Easy",
    "week": 3,
    "solution": "Queue + frequency map. Dequeue while front has freq > 1. O(n).",
    "link": "https://www.geeksforgeeks.org/find-first-non-repeating-character-stream-characters/"
  },
  {
    "id": 95,
    "pattern": "Linked List Techniques",
    "question": "Reverse a singly linked list.",
    "difficulty": "Easy",
    "week": 3,
    "solution": "Iterative: three pointers (prev, curr, next). Or recursive. O(n) time O(1) space iterative.",
    "link": "https://leetcode.com/problems/reverse-linked-list/"
  },
  {
    "id": 96,
    "pattern": "Linked List Techniques",
    "question": "Reverse a linked list in groups of size k.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Reverse first k nodes. Recursively reverse remaining. Connect groups. O(n).",
    "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/"
  },
  {
    "id": 97,
    "pattern": "Linked List Techniques",
    "question": "Merge two sorted linked lists.",
    "difficulty": "Easy",
    "week": 3,
    "solution": "Compare heads, attach smaller, advance pointer. Iterative or recursive. O(m+n).",
    "link": "https://leetcode.com/problems/merge-two-sorted-lists/"
  },
  {
    "id": 98,
    "pattern": "Linked List Techniques",
    "question": "Clone a linked list with random pointer.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Interleave cloned nodes \u2192 set random pointers \u2192 separate lists. O(n) without hashmap.",
    "link": "https://leetcode.com/problems/copy-list-with-random-pointer/"
  },
  {
    "id": 99,
    "pattern": "Linked List Techniques",
    "question": "Insert into a sorted circular linked list when only an arbitrary node is given.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Traverse to find correct position. Handle wrap-around case (max\u2192min). O(n).",
    "link": "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/"
  },
  {
    "id": 100,
    "pattern": "Linked List Techniques",
    "question": "Find the intersection point of two linked lists.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Get lengths, advance longer by diff, walk together. Or two-pointer cycle trick. O(m+n).",
    "link": "https://leetcode.com/problems/intersection-of-two-linked-lists/"
  },
  {
    "id": 101,
    "pattern": "Linked List Techniques",
    "question": "Add two numbers represented by linked lists.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Traverse both, add digits + carry. New nodes per digit. Handle unequal lengths & final carry. O(max(m,n)).",
    "link": "https://leetcode.com/problems/add-two-numbers/"
  },
  {
    "id": 102,
    "pattern": "Linked List Techniques",
    "question": "Flatten a multilevel linked list.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "DFS / stack. On child, splice child list between current and next. O(n).",
    "link": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/"
  },
  {
    "id": 103,
    "pattern": "Linked List Techniques",
    "question": "Reorder a linked list by odd and even positions or partition it around a pivot.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Separate into two lists (odd/even indexed), then concatenate. O(n).",
    "link": "https://leetcode.com/problems/odd-even-linked-list/"
  },
  {
    "id": 104,
    "pattern": "Linked List Techniques",
    "question": "Select a random node from a singly linked list.",
    "difficulty": "Medium",
    "week": 3,
    "solution": "Reservoir sampling. For ith node, pick with probability 1/i. O(n) per call O(1) space.",
    "link": "https://leetcode.com/problems/linked-list-random-node/"
  },
  {
    "id": 105,
    "pattern": "Greedy",
    "question": "Find the maximum profit from one stock transaction.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Track minPrice so far. profit = price \u2212 minPrice. Track maxProfit. O(n).",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
  },
  {
    "id": 106,
    "pattern": "Greedy",
    "question": "Find the maximum profit from multiple stock transactions.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Add all positive diffs: prices[i] \u2212 prices[i\u22121] when positive. O(n).",
    "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
  },
  {
    "id": 107,
    "pattern": "Greedy",
    "question": "Solve Jump Game.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Track farthest reachable index. If i > farthest, return false. O(n).",
    "link": "https://leetcode.com/problems/jump-game/"
  },
  {
    "id": 108,
    "pattern": "Greedy",
    "question": "Solve Jump Game II or minimum jumps to reach the end.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Track currentEnd and farthest. Increment jumps when reaching currentEnd. BFS-like. O(n).",
    "link": "https://leetcode.com/problems/jump-game-ii/"
  },
  {
    "id": 109,
    "pattern": "Greedy",
    "question": "Find the minimum number of taps needed to water a garden.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Convert to intervals. Greedy interval covering: always pick the tap reaching farthest. O(n).",
    "link": "https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/"
  },
  {
    "id": 110,
    "pattern": "Greedy",
    "question": "Solve the gas station complete-circuit problem.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Track totalSurplus and currentSurplus. Reset start on negative current. If total \u2265 0, answer = start. O(n).",
    "link": "https://leetcode.com/problems/gas-station/"
  },
  {
    "id": 111,
    "pattern": "Greedy",
    "question": "Solve the lemonade change greedy simulation.",
    "difficulty": "Easy",
    "week": 4,
    "solution": "Track $5 and $10 bills. For $10: give $5. For $20: prefer $10+$5, else 3\u00d7$5. O(n).",
    "link": "https://leetcode.com/problems/lemonade-change/"
  },
  {
    "id": 112,
    "pattern": "Greedy",
    "question": "Distribute candy subject to neighbor constraints.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Two passes: left\u2192right (compare left neighbor), right\u2192left (compare right). Take max. O(n).",
    "link": "https://leetcode.com/problems/candy/"
  },
  {
    "id": 113,
    "pattern": "Greedy",
    "question": "Assign cookies or resources greedily to maximize satisfied demand.",
    "difficulty": "Easy",
    "week": 4,
    "solution": "Sort both arrays. Two pointers: assign smallest sufficient cookie to smallest child. O(n log n).",
    "link": "https://leetcode.com/problems/assign-cookies/"
  },
  {
    "id": 114,
    "pattern": "Greedy",
    "question": "Solve reverse-greedy transformations such as Broken Calculator.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Work backwards. If target > start: even \u2192 divide; odd \u2192 add 1. Greedy reverse. O(log target).",
    "link": "https://leetcode.com/problems/broken-calculator/"
  },
  {
    "id": 115,
    "pattern": "Greedy",
    "question": "Solve job sequencing with deadlines and profits.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Sort by profit desc. For each job, find latest free slot \u2264 deadline using DSU or array. O(n log n).",
    "link": "https://www.geeksforgeeks.org/job-sequencing-problem/"
  },
  {
    "id": 116,
    "pattern": "Greedy",
    "question": "Reconstruct a queue by height and position constraints.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Sort by height desc, k asc. Insert each person at index k in result. O(n\u00b2).",
    "link": "https://leetcode.com/problems/queue-reconstruction-by-height/"
  },
  {
    "id": 117,
    "pattern": "Greedy",
    "question": "Reorganize a string so no two adjacent characters are the same.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Max-heap by frequency. Greedily place most frequent, then next. Return '' if impossible. O(n log k).",
    "link": "https://leetcode.com/problems/reorganize-string/"
  },
  {
    "id": 118,
    "pattern": "Greedy",
    "question": "Find the lexicographically smallest string obtainable by removing at most one character.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Find first i where s[i] > s[i+1], remove s[i]. If none found, remove last char. O(n).",
    "link": "https://www.geeksforgeeks.org/lexicographically-smallest-string-formed-by-removing-at-most-one-character/"
  },
  {
    "id": 119,
    "pattern": "Greedy",
    "question": "Partition a string or label sequence greedily so each symbol appears in at most one part.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Record last occurrence of each char. Expand partition end to max last occurrence. Cut when i == end. O(n).",
    "link": "https://leetcode.com/problems/partition-labels/"
  },
  {
    "id": 120,
    "pattern": "Interval Merge / Schedule",
    "question": "Merge overlapping intervals.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Sort by start. Merge if current start \u2264 prev end. Update end = max(ends). O(n log n).",
    "link": "https://leetcode.com/problems/merge-intervals/"
  },
  {
    "id": 121,
    "pattern": "Interval Merge / Schedule",
    "question": "Insert an interval into a sorted non-overlapping list.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Add non-overlapping before. Merge overlapping ones. Add non-overlapping after. O(n).",
    "link": "https://leetcode.com/problems/insert-interval/"
  },
  {
    "id": 122,
    "pattern": "Interval Merge / Schedule",
    "question": "Find interval intersections between two lists.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Two pointers. If overlap, add intersection. Advance the one ending first. O(m+n).",
    "link": "https://leetcode.com/problems/interval-list-intersections/"
  },
  {
    "id": 123,
    "pattern": "Interval Merge / Schedule",
    "question": "Check whether all meetings can be attended; if not find rooms needed.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Sort by start for attendance check. Min-heap of end times for room count. O(n log n).",
    "link": "https://leetcode.com/problems/meeting-rooms-ii/"
  },
  {
    "id": 124,
    "pattern": "Interval Merge / Schedule",
    "question": "Perform activity selection or maximize non-overlapping intervals.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Sort by end time. Greedily pick earliest-ending non-overlapping. O(n log n).",
    "link": "https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/"
  },
  {
    "id": 125,
    "pattern": "Interval Merge / Schedule",
    "question": "Find the minimum number of intervals to remove so the rest do not overlap.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Sort by end. Count non-overlapping (activity selection). Remove = total \u2212 count. O(n log n).",
    "link": "https://leetcode.com/problems/non-overlapping-intervals/"
  },
  {
    "id": 126,
    "pattern": "Interval Merge / Schedule",
    "question": "Find the minimum number of arrows to burst all balloons.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Sort by end. Shoot at first end. Skip covered balloons. Count uncovered. O(n log n).",
    "link": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/"
  },
  {
    "id": 127,
    "pattern": "Sweep Line / Events",
    "question": "Find the point where the maximum number of intervals overlap.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Events: +1 at start, \u22121 at end. Sort. Track running sum and max. O(n log n).",
    "link": "https://www.geeksforgeeks.org/find-the-point-where-maximum-intervals-overlap/"
  },
  {
    "id": 128,
    "pattern": "Sweep Line / Events",
    "question": "Find the minimum number of platforms or rooms needed for intervals.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Sort arrivals and departures. Two-pointer merge. Or sweep line. O(n log n).",
    "link": "https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/"
  },
  {
    "id": 129,
    "pattern": "Sweep Line / Events",
    "question": "Find the peak number of concurrent intervals.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Same sweep line pattern. Max running sum = peak concurrency. O(n log n).",
    "link": "https://www.geeksforgeeks.org/find-the-point-where-maximum-intervals-overlap/"
  },
  {
    "id": 130,
    "pattern": "Sweep Line / Events",
    "question": "Solve car-pooling or capacity scheduling with a sweep-line technique.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "+passengers at pickup, \u2212passengers at drop. Sort events. Check if capacity ever exceeded. O(n log n).",
    "link": "https://leetcode.com/problems/car-pooling/"
  },
  {
    "id": 131,
    "pattern": "Sweep Line / Events",
    "question": "Find the number of rooms needed for meetings using a min-heap.",
    "difficulty": "Medium",
    "week": 4,
    "solution": "Sort by start. Min-heap of end times. If earliest end \u2264 new start, reuse. Else add room. O(n log n).",
    "link": "https://leetcode.com/problems/meeting-rooms-ii/"
  },
  {
    "id": 132,
    "pattern": "BFS (Shortest Path)",
    "question": "Find the shortest path in an unweighted graph using BFS.",
    "difficulty": "Easy",
    "week": 5,
    "solution": "Standard BFS from source. Distance = level in BFS tree. O(V+E).",
    "link": "https://www.geeksforgeeks.org/shortest-path-unweighted-graph/"
  },
  {
    "id": 133,
    "pattern": "BFS (Shortest Path)",
    "question": "Find the shortest path in a binary maze.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "BFS on grid. 4-directional. Walls = 0, paths = 1. O(m\u00d7n).",
    "link": "https://www.geeksforgeeks.org/shortest-path-in-a-binary-maze/"
  },
  {
    "id": 134,
    "pattern": "BFS (Shortest Path)",
    "question": "Find the shortest path in a binary matrix.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "BFS from (0,0) to (n\u22121,n\u22121). 8-directional movement. Track visited. O(m\u00d7n).",
    "link": "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
  },
  {
    "id": 135,
    "pattern": "BFS (Shortest Path)",
    "question": "Find the minimum knight moves and print one valid path.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "BFS with 8 L-shaped moves. Track parent for path reconstruction. O(area).",
    "link": "https://leetcode.com/problems/minimum-knight-moves/"
  },
  {
    "id": 136,
    "pattern": "BFS (Shortest Path)",
    "question": "Solve Word Ladder.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "BFS. Each word = node. Edge = differ by 1 char. Use wildcard patterns for efficiency. O(n\u00d7L\u00b2).",
    "link": "https://leetcode.com/problems/word-ladder/"
  },
  {
    "id": 137,
    "pattern": "BFS (Shortest Path)",
    "question": "Solve Open the Lock.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "BFS from '0000'. 8 neighbors per state (4 wheels \u00d7 2 directions). Skip deadends. O(10\u2074).",
    "link": "https://leetcode.com/problems/open-the-lock/"
  },
  {
    "id": 138,
    "pattern": "BFS (Shortest Path)",
    "question": "Solve Snakes and Ladders with BFS.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "BFS from cell 1. Try 1\u20136 dice rolls. Follow snakes/ladders instantly. O(n\u00b2).",
    "link": "https://leetcode.com/problems/snakes-and-ladders/"
  },
  {
    "id": 139,
    "pattern": "BFS (Shortest Path)",
    "question": "Determine whether all rooms can be visited in Keys and Rooms.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "BFS/DFS from room 0. Collect keys, visit new rooms. Check if all visited. O(V+E).",
    "link": "https://leetcode.com/problems/keys-and-rooms/"
  },
  {
    "id": 140,
    "pattern": "Multi-Source BFS",
    "question": "Count the number of islands.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "For each unvisited '1', BFS/DFS flood fill and increment count. O(m\u00d7n).",
    "link": "https://leetcode.com/problems/number-of-islands/"
  },
  {
    "id": 141,
    "pattern": "Multi-Source BFS",
    "question": "Count the number of distinct islands.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "DFS with shape encoding (relative positions or direction sequence). HashSet of shapes. O(m\u00d7n).",
    "link": "https://leetcode.com/problems/number-of-distinct-islands/"
  },
  {
    "id": 142,
    "pattern": "Multi-Source BFS",
    "question": "Find the maximum area of an island.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "BFS/DFS flood fill. Track area of each island. Return maximum. O(m\u00d7n).",
    "link": "https://leetcode.com/problems/max-area-of-island/"
  },
  {
    "id": 143,
    "pattern": "Multi-Source BFS",
    "question": "Solve rotten oranges with multi-source BFS.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "Enqueue all rotten initially. BFS layer by layer. Time = layers. Check fresh remaining. O(m\u00d7n).",
    "link": "https://leetcode.com/problems/rotting-oranges/"
  },
  {
    "id": 144,
    "pattern": "Multi-Source BFS",
    "question": "Perform flood fill.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "DFS/BFS from starting cell. Change color of connected same-color cells. O(m\u00d7n).",
    "link": "https://leetcode.com/problems/flood-fill/"
  },
  {
    "id": 145,
    "pattern": "Multi-Source BFS",
    "question": "Count the number of connected components in a graph.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "BFS/DFS from each unvisited node. Or DSU. Count components. O(V+E).",
    "link": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"
  },
  {
    "id": 146,
    "pattern": "BFS with State / Dijkstra",
    "question": "Solve the water jug problem both as state-space search and with gcd reasoning.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "BFS on states (a,b). Or math: solvable iff target % gcd(jug1,jug2) == 0. O(jug1\u00d7jug2) for BFS.",
    "link": "https://leetcode.com/problems/water-and-jug-problem/"
  },
  {
    "id": 147,
    "pattern": "BFS with State / Dijkstra",
    "question": "Find a path with minimum effort in a grid.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "Dijkstra: state = (row, col). Weight = max abs diff along path. O(m\u00d7n log(m\u00d7n)).",
    "link": "https://leetcode.com/problems/path-with-minimum-effort/"
  },
  {
    "id": 148,
    "pattern": "BFS with State / Dijkstra",
    "question": "Solve Swim in Rising Water.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "Dijkstra with max edge weight. Or binary search on time + BFS. O(n\u00b2 log n).",
    "link": "https://leetcode.com/problems/swim-in-rising-water/"
  },
  {
    "id": 149,
    "pattern": "BFS with State / Dijkstra",
    "question": "Find the shortest path with alternating edge colors.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "BFS with state = (node, last_color). Expand with alternating color. O(V+E).",
    "link": "https://leetcode.com/problems/shortest-path-with-alternating-colors/"
  },
  {
    "id": 150,
    "pattern": "BFS with State / Dijkstra",
    "question": "Find the cheapest flight within k stops.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "Modified Bellman-Ford (k+1 iterations). Or BFS with level limit. O(k\u00d7E).",
    "link": "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
  },
  {
    "id": 151,
    "pattern": "Dijkstra / Weighted Graph",
    "question": "Find the shortest path in a weighted graph using Dijkstra's algorithm.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "Min-heap priority queue. Relax edges greedily. No negative weights. O((V+E) log V).",
    "link": "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"
  },
  {
    "id": 152,
    "pattern": "Dijkstra / Weighted Graph",
    "question": "Solve Network Delay Time.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "Dijkstra from source. Answer = max distance to any node. \u22121 if unreachable. O((V+E) log V).",
    "link": "https://leetcode.com/problems/network-delay-time/"
  },
  {
    "id": 153,
    "pattern": "Dijkstra / Weighted Graph",
    "question": "Find the minimum cost to connect all points.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "MST: Prim's (min-heap) or Kruskal's (sort edges + DSU). Manhattan distance. O(n\u00b2 log n).",
    "link": "https://leetcode.com/problems/min-cost-to-connect-all-points/"
  },
  {
    "id": 154,
    "pattern": "Dijkstra / Weighted Graph",
    "question": "Evaluate division queries on a graph.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "Build weighted directed graph. DFS/BFS to find path and multiply edge weights. O(Q\u00d7(V+E)).",
    "link": "https://leetcode.com/problems/evaluate-division/"
  },
  {
    "id": 155,
    "pattern": "Topological Sort",
    "question": "Solve course schedule by detecting a cycle in a directed graph.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "Kahn's BFS (in-degree) or DFS 3-coloring. Cycle if not all nodes processed. O(V+E).",
    "link": "https://leetcode.com/problems/course-schedule/"
  },
  {
    "id": 156,
    "pattern": "Topological Sort",
    "question": "Perform topological sort.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "Kahn's: BFS with in-degree tracking. Or DFS: add to stack on finish, reverse. O(V+E).",
    "link": "https://leetcode.com/problems/course-schedule-ii/"
  },
  {
    "id": 157,
    "pattern": "Topological Sort",
    "question": "Find eventual safe states in a directed graph.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "Reverse graph + topo sort. Or DFS 3-coloring. Safe = nodes not in any cycle. O(V+E).",
    "link": "https://leetcode.com/problems/find-eventual-safe-states/"
  },
  {
    "id": 158,
    "pattern": "Topological Sort",
    "question": "Infer an alien dictionary order from sorted words.",
    "difficulty": "Hard",
    "week": 5,
    "solution": "Build DAG from adjacent word comparisons. Topological sort. Detect contradictions. O(C).",
    "link": "https://leetcode.com/problems/alien-dictionary/"
  },
  {
    "id": 159,
    "pattern": "Topological Sort",
    "question": "Enumerate all paths from source to target in a DAG.",
    "difficulty": "Medium",
    "week": 5,
    "solution": "DFS/backtracking. No cycles \u2192 explore all paths. Record when target reached. O(2\u207f \u00d7 n).",
    "link": "https://leetcode.com/problems/all-paths-from-source-to-target/"
  },
  {
    "id": 160,
    "pattern": "Union-Find (DSU)",
    "question": "Implement disjoint set union with path compression and union by rank.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "find(x): path compression. union(x,y): attach smaller rank under larger. Near O(1) amortized.",
    "link": "https://www.geeksforgeeks.org/introduction-to-disjoint-set-data-structure-or-union-find-algorithm/"
  },
  {
    "id": 161,
    "pattern": "Union-Find (DSU)",
    "question": "Use DSU for component counting merges and connectivity queries.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Initialize each as own parent. Union on edges. Components = distinct roots.",
    "link": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"
  },
  {
    "id": 162,
    "pattern": "Union-Find (DSU)",
    "question": "Detect a cycle in an undirected graph.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Process edges. If both endpoints in same set \u2192 cycle. O(E \u00d7 \u03b1(V)).",
    "link": "https://www.geeksforgeeks.org/detect-cycle-undirected-graph/"
  },
  {
    "id": 163,
    "pattern": "Union-Find (DSU)",
    "question": "Find a minimum spanning tree.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Kruskal's: sort edges + DSU. Accept edge if endpoints in different sets. O(E log E).",
    "link": "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/"
  },
  {
    "id": 164,
    "pattern": "Union-Find (DSU)",
    "question": "Process dynamic island additions or Number of Islands II with DSU.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "For each new land, union with adjacent land. Track component count. O(k \u00d7 \u03b1(n)).",
    "link": "https://leetcode.com/problems/number-of-islands-ii/"
  },
  {
    "id": 165,
    "pattern": "Union-Find (DSU)",
    "question": "Merge accounts using a graph or DSU.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Union accounts sharing same email. Group by root parent. O(n \u00d7 k \u00d7 \u03b1(n)).",
    "link": "https://leetcode.com/problems/accounts-merge/"
  },
  {
    "id": 166,
    "pattern": "Union-Find (DSU)",
    "question": "Find a redundant connection.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Process edges with DSU. First edge connecting already-connected nodes is redundant. O(n \u00d7 \u03b1(n)).",
    "link": "https://leetcode.com/problems/redundant-connection/"
  },
  {
    "id": 167,
    "pattern": "Graph DFS",
    "question": "Detect a cycle in a directed graph.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "DFS with 3-color (white/gray/black). Back edge (gray\u2192gray) = cycle. O(V+E).",
    "link": "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/"
  },
  {
    "id": 168,
    "pattern": "Graph DFS",
    "question": "Check whether a graph is bipartite.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "BFS/DFS 2-coloring. If adjacent nodes get same color, not bipartite. O(V+E).",
    "link": "https://leetcode.com/problems/is-graph-bipartite/"
  },
  {
    "id": 169,
    "pattern": "Graph DFS",
    "question": "Clone a graph.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "DFS/BFS with hashmap (original\u2192clone). Clone neighbors recursively. O(V+E).",
    "link": "https://leetcode.com/problems/clone-graph/"
  },
  {
    "id": 170,
    "pattern": "Tarjan's Algorithm",
    "question": "Find critical connections or bridges in a network.",
    "difficulty": "Hard",
    "week": 6,
    "solution": "DFS with disc[] and low[]. Bridge if low[v] > disc[u] for edge u\u2192v. O(V+E).",
    "link": "https://leetcode.com/problems/critical-connections-in-a-network/"
  },
  {
    "id": 171,
    "pattern": "Tarjan's Algorithm",
    "question": "Find articulation points in a graph.",
    "difficulty": "Hard",
    "week": 6,
    "solution": "Root is AP if \u2265 2 DFS children. Non-root u is AP if child v has low[v] \u2265 disc[u]. O(V+E).",
    "link": "https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/"
  },
  {
    "id": 172,
    "pattern": "Tree DFS (Post-order)",
    "question": "Find the maximum depth of a binary tree.",
    "difficulty": "Easy",
    "week": 6,
    "solution": "1 + max(leftDepth, rightDepth). Base: null \u2192 0. O(n).",
    "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
  },
  {
    "id": 173,
    "pattern": "Tree DFS (Post-order)",
    "question": "Find the minimum depth of a binary tree.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "BFS returns first leaf level. Or recursive: handle single-child nodes carefully. O(n).",
    "link": "https://leetcode.com/problems/minimum-depth-of-binary-tree/"
  },
  {
    "id": 174,
    "pattern": "Tree DFS (Post-order)",
    "question": "Check whether a binary tree is height-balanced.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Return \u22121 if unbalanced. Check |leftH \u2212 rightH| \u2264 1 at each node. O(n).",
    "link": "https://leetcode.com/problems/balanced-binary-tree/"
  },
  {
    "id": 175,
    "pattern": "Tree DFS (Post-order)",
    "question": "Compute the diameter of a binary tree.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Diameter through node = leftHeight + rightHeight. Track global max. O(n).",
    "link": "https://leetcode.com/problems/diameter-of-binary-tree/"
  },
  {
    "id": 176,
    "pattern": "Tree DFS (Post-order)",
    "question": "Compute the maximum path sum in a binary tree.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "At each node: single path = val + max(left, right, 0). Global = val + left + right. O(n).",
    "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
  },
  {
    "id": 177,
    "pattern": "Tree DFS (Post-order)",
    "question": "Find the largest subtree that is also a BST.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Return (isBST, size, min, max) per subtree. Track global max size. O(n).",
    "link": "https://leetcode.com/problems/largest-bst-subtree/"
  },
  {
    "id": 178,
    "pattern": "Tree DFS (Post-order)",
    "question": "Count univalue subtrees.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Subtree is univalue if children are univalue and same value as root. O(n).",
    "link": "https://leetcode.com/problems/count-univalue-subtrees/"
  },
  {
    "id": 179,
    "pattern": "Tree DFS (Post-order)",
    "question": "Find the maximum sum of tree nodes such that no two adjacent nodes are chosen.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "DP: include (val + grandchildren) vs exclude (children sums). Return pair. O(n).",
    "link": "https://leetcode.com/problems/house-robber-iii/"
  },
  {
    "id": 180,
    "pattern": "Tree DFS (Post-order)",
    "question": "Find leaves of a binary tree in rounds.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Leaf height = 0. Internal = 1 + max(children). Group by height. O(n).",
    "link": "https://leetcode.com/problems/find-leaves-of-binary-tree/"
  },
  {
    "id": 181,
    "pattern": "Tree DFS (Post-order)",
    "question": "Check whether one tree is a subtree of another.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "For each node in main tree, check subtree match. O(m\u00d7n). Or serialize + KMP.",
    "link": "https://leetcode.com/problems/subtree-of-another-tree/"
  },
  {
    "id": 182,
    "pattern": "Tree DFS (Post-order)",
    "question": "Convert a BST into a greater-sum tree.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Reverse inorder (right\u2192root\u2192left). Maintain running sum. Replace each value. O(n).",
    "link": "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/"
  },
  {
    "id": 183,
    "pattern": "Tree DFS (Pre-order)",
    "question": "Solve root-to-leaf path sum existence.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Subtract node value from target. At leaf, check remaining == 0. O(n).",
    "link": "https://leetcode.com/problems/path-sum/"
  },
  {
    "id": 184,
    "pattern": "Tree DFS (Pre-order)",
    "question": "Print all root-to-leaf paths whose sum equals a target.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "DFS with path tracking and backtracking. Record path when leaf + sum matches. O(n).",
    "link": "https://leetcode.com/problems/path-sum-ii/"
  },
  {
    "id": 185,
    "pattern": "Tree DFS (Pre-order)",
    "question": "Count good nodes in a binary tree.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "DFS passing max-so-far. Node is good if val \u2265 max-so-far. O(n).",
    "link": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/"
  },
  {
    "id": 186,
    "pattern": "Tree DFS (Pre-order)",
    "question": "Turn a binary tree upside down under a specified parent-child transform.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Leftmost leaf \u2192 new root. Parent \u2192 right child, sibling \u2192 left. Iterative or recursive.",
    "link": "https://leetcode.com/problems/binary-tree-upside-down/"
  },
  {
    "id": 187,
    "pattern": "Tree BFS / Level-based",
    "question": "Perform level-order traversal.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "BFS with queue. Process level by level using queue size. O(n).",
    "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
  },
  {
    "id": 188,
    "pattern": "Tree BFS / Level-based",
    "question": "Perform zigzag level-order traversal.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "BFS. Alternate direction per level using a flag or deque. O(n).",
    "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
  },
  {
    "id": 189,
    "pattern": "Tree BFS / Level-based",
    "question": "Perform vertical-order traversal.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "BFS/DFS with (column, row). TreeMap<col, list>. Sort by col then row. O(n log n).",
    "link": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/"
  },
  {
    "id": 190,
    "pattern": "Tree BFS / Level-based",
    "question": "Print the top view or bottom view of a binary tree.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "BFS with horizontal distance. Top: first node per HD. Bottom: last node per HD. O(n).",
    "link": "https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/"
  },
  {
    "id": 191,
    "pattern": "Tree BFS / Level-based",
    "question": "Perform diagonal traversal.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Group nodes by diagonal d. Left child: d+1, right child: same d. O(n).",
    "link": "https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/"
  },
  {
    "id": 192,
    "pattern": "Tree BFS / Level-based",
    "question": "Print the left view or right view of a binary tree.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "BFS: first (left) or last (right) node of each level. Or DFS with level tracking. O(n).",
    "link": "https://leetcode.com/problems/binary-tree-right-side-view/"
  },
  {
    "id": 193,
    "pattern": "Tree BFS / Level-based",
    "question": "Perform boundary traversal.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Left boundary (top-down) + leaves (left\u2192right) + right boundary (bottom-up). No duplicates. O(n).",
    "link": "https://leetcode.com/problems/boundary-of-binary-tree/"
  },
  {
    "id": 194,
    "pattern": "Tree BFS / Level-based",
    "question": "Compute the sum of leaf nodes at the minimum level.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "BFS. At first level with a leaf, sum all leaves at that level. O(n).",
    "link": "https://www.geeksforgeeks.org/sum-leaf-nodes-minimum-level/"
  },
  {
    "id": 195,
    "pattern": "Tree BFS / Level-based",
    "question": "Find the maximum width of a binary tree.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "BFS with position indexing. Width = rightmost \u2212 leftmost + 1. Use offset for overflow. O(n).",
    "link": "https://leetcode.com/problems/maximum-width-of-binary-tree/"
  },
  {
    "id": 196,
    "pattern": "Tree BFS / Level-based",
    "question": "Find all nodes at distance k from a target node.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Build parent pointers (BFS/DFS). Then BFS k levels from target. O(n).",
    "link": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/"
  },
  {
    "id": 197,
    "pattern": "Tree BFS / Level-based",
    "question": "Find the amount of time needed to infect an entire binary tree from a start node.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "Build graph (parent pointers). BFS from start. Time = max BFS depth. O(n).",
    "link": "https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/"
  },
  {
    "id": 198,
    "pattern": "Tree BFS / Level-based",
    "question": "Reverse the odd levels of a binary tree.",
    "difficulty": "Medium",
    "week": 6,
    "solution": "BFS level by level. At odd levels, reverse the node values. O(n).",
    "link": "https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/"
  },
  {
    "id": 199,
    "pattern": "BST Properties",
    "question": "Compute range sum in a BST.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "If node < low \u2192 go right. If node > high \u2192 go left. Else add value and go both. O(n).",
    "link": "https://leetcode.com/problems/range-sum-of-bst/"
  },
  {
    "id": 200,
    "pattern": "BST Properties",
    "question": "Find two nodes in a BST whose values sum to k.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Inorder \u2192 sorted array \u2192 two pointers. Or BST iterator + reverse iterator. O(n).",
    "link": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/"
  },
  {
    "id": 201,
    "pattern": "BST Properties",
    "question": "Find the inorder successor in a BST.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "If right child: go right then leftmost. Else: ancestor where node is in left subtree. O(h).",
    "link": "https://leetcode.com/problems/inorder-successor-in-bst/"
  },
  {
    "id": 202,
    "pattern": "BST Properties",
    "question": "Find the predecessor and successor of a key in a BST.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Traverse. Update predecessor going right, successor going left. O(h).",
    "link": "https://www.geeksforgeeks.org/inorder-predecessor-successor-given-key-bst/"
  },
  {
    "id": 203,
    "pattern": "BST Properties",
    "question": "Find the closest value or k closest values in a BST.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "BST search for closest. For k closest: inorder + sliding window, or pred/succ stacks. O(h + k).",
    "link": "https://leetcode.com/problems/closest-binary-search-tree-value/"
  },
  {
    "id": 204,
    "pattern": "Tree Construction",
    "question": "Build or reason about a tree from inorder and level-order traversal.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Root from level-order first element. Partition inorder. Recursively filter level-order.",
    "link": "https://www.geeksforgeeks.org/construct-tree-inorder-level-order-traversals/"
  },
  {
    "id": 205,
    "pattern": "Tree Construction",
    "question": "Serialize and deserialize a binary tree.",
    "difficulty": "Hard",
    "week": 7,
    "solution": "Preorder with null markers. Serialize: node,left,right. Deserialize: read preorder, build recursively.",
    "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
  },
  {
    "id": 206,
    "pattern": "LCA",
    "question": "Find the lowest common ancestor in a binary tree.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "If node is p or q, return it. Recurse left and right. If both non-null, current is LCA. O(n).",
    "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
  },
  {
    "id": 207,
    "pattern": "LCA",
    "question": "Find the lowest common ancestor in an N-ary tree.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Count target nodes found in children subtrees. If \u2265 2, current is LCA. O(n).",
    "link": "https://www.geeksforgeeks.org/lca-for-general-or-n-ary-trees/"
  },
  {
    "id": 208,
    "pattern": "Heap / Priority Queue",
    "question": "Find the k largest distinct elements without fully sorting the array.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Min-heap of size k. Iterate array. O(n log k). Or Quickselect O(n) average.",
    "link": "https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/"
  },
  {
    "id": 209,
    "pattern": "Heap / Priority Queue",
    "question": "Find the kth smallest or kth largest element in an array.",
    "difficulty": "Hard",
    "week": 7,
    "solution": "Quickselect O(n) avg. Or min/max heap of size k: O(n log k).",
    "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
  },
  {
    "id": 210,
    "pattern": "Heap / Priority Queue",
    "question": "Merge k sorted linked lists.",
    "difficulty": "Hard",
    "week": 7,
    "solution": "Min-heap of size k with heads. Extract min, push next from that list. O(n log k).",
    "link": "https://leetcode.com/problems/merge-k-sorted-lists/"
  },
  {
    "id": 211,
    "pattern": "Heap / Priority Queue",
    "question": "Merge k sorted arrays and optionally remove duplicates.",
    "difficulty": "Hard",
    "week": 7,
    "solution": "Min-heap of (value, array_idx, elem_idx). Extract min, push next. Skip dups. O(n log k).",
    "link": "https://www.geeksforgeeks.org/merge-k-sorted-arrays/"
  },
  {
    "id": 212,
    "pattern": "Heap / Priority Queue",
    "question": "Maintain the median of a data stream.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Two heaps: maxHeap (lower half), minHeap (upper half). Balance sizes. Median from tops. O(log n).",
    "link": "https://leetcode.com/problems/find-median-from-data-stream/"
  },
  {
    "id": 213,
    "pattern": "Heap / Priority Queue",
    "question": "Implement heap sort and explain heapify.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Build max-heap O(n). Repeatedly extract max and sift-down. O(n log n). Heapify = sift down.",
    "link": "https://www.geeksforgeeks.org/heap-sort/"
  },
  {
    "id": 214,
    "pattern": "Heap / Priority Queue",
    "question": "Connect ropes or merge files with minimum total cost.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Min-heap. Always merge two smallest. Total = sum of intermediate costs. O(n log n).",
    "link": "https://leetcode.com/problems/minimum-cost-to-connect-sticks/"
  },
  {
    "id": 215,
    "pattern": "Heap / Priority Queue",
    "question": "Find the smallest range covering at least one element from each of k lists.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Min-heap with one per list. Track max. Range = [heap_min, max]. Advance min's list. O(n log k).",
    "link": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/"
  },
  {
    "id": 216,
    "pattern": "Heap / Priority Queue",
    "question": "Maximize capital or profit under project-selection constraints such as IPO.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Sort by capital. Min-heap for capital, max-heap for affordable profits. Greedy. O(n log n).",
    "link": "https://leetcode.com/problems/ipo/"
  },
  {
    "id": 217,
    "pattern": "Heap / Priority Queue",
    "question": "Find the k closest points to the origin.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Max-heap of size k by distance. Or Quickselect. O(n log k) or O(n).",
    "link": "https://leetcode.com/problems/k-closest-points-to-origin/"
  },
  {
    "id": 218,
    "pattern": "Heap / Priority Queue",
    "question": "Sort a nearly sorted array where each element is at most k positions away.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Min-heap of size k+1. Extract min for each element. O(n log k).",
    "link": "https://www.geeksforgeeks.org/nearly-sorted-algorithm/"
  },
  {
    "id": 219,
    "pattern": "Heap / Priority Queue",
    "question": "Maintain the kth largest element in a stream.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Min-heap of size k. If new > top, replace and heapify. Top = kth largest. O(log k) per add.",
    "link": "https://leetcode.com/problems/kth-largest-element-in-a-stream/"
  },
  {
    "id": 220,
    "pattern": "Heap / Priority Queue",
    "question": "Schedule tasks with cooldown constraints using a heap-based strategy.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Max-heap by freq. Each cycle: pick top n+1 tasks. Idle if insufficient. O(tasks \u00d7 log 26).",
    "link": "https://leetcode.com/problems/task-scheduler/"
  },
  {
    "id": 221,
    "pattern": "Heap / Priority Queue",
    "question": "Design an iterator over k sorted lists or streams.",
    "difficulty": "Medium",
    "week": 7,
    "solution": "Min-heap of (value, list_idx, elem_idx). Extract min, push next. O(log k) per next().",
    "link": "https://www.geeksforgeeks.org/merge-k-sorted-arrays/"
  },
  {
    "id": 222,
    "pattern": "Backtracking",
    "question": "Solve Rat in a Maze.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Try all 4 directions. Mark visited. Backtrack on dead end. O(4^(n\u00b2)).",
    "link": "https://www.geeksforgeeks.org/rat-in-a-maze/"
  },
  {
    "id": 223,
    "pattern": "Backtracking",
    "question": "Solve N-Queens.",
    "difficulty": "Hard",
    "week": 8,
    "solution": "Place row by row. Check column, diagonal, anti-diagonal. O(n!).",
    "link": "https://leetcode.com/problems/n-queens/"
  },
  {
    "id": 224,
    "pattern": "Backtracking",
    "question": "Solve Sudoku.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Try 1\u20139 in each empty cell. Validate row, column, 3\u00d73 box. O(9^(empty cells)).",
    "link": "https://leetcode.com/problems/sudoku-solver/"
  },
  {
    "id": 225,
    "pattern": "Backtracking",
    "question": "Generate all permutations of an array or string.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Swap or visited-array approach. n! permutations. O(n \u00d7 n!).",
    "link": "https://leetcode.com/problems/permutations/"
  },
  {
    "id": 226,
    "pattern": "Backtracking",
    "question": "Generate the power set or all subsets.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Include/exclude each element. Or iterative bitmask. 2\u207f subsets.",
    "link": "https://leetcode.com/problems/subsets/"
  },
  {
    "id": 227,
    "pattern": "Backtracking",
    "question": "Solve Combination Sum and its common variants.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Sort for pruning. Allow reuse (I) or not (II). Handle dups (II). O(2^target).",
    "link": "https://leetcode.com/problems/combination-sum/"
  },
  {
    "id": 228,
    "pattern": "Backtracking",
    "question": "Partition a string into palindromic pieces.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Try each prefix. If palindrome, recurse on suffix. O(n \u00d7 2\u207f).",
    "link": "https://leetcode.com/problems/palindrome-partitioning/"
  },
  {
    "id": 229,
    "pattern": "Backtracking",
    "question": "Generate balanced parentheses.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Track open/close count. '(' if open < n, ')' if close < open. O(4\u207f/\u221an).",
    "link": "https://leetcode.com/problems/generate-parentheses/"
  },
  {
    "id": 230,
    "pattern": "Backtracking",
    "question": "Solve Word Search in a grid.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "DFS from each matching cell. Mark visited. Try 4 directions. O(m\u00d7n\u00d74^L).",
    "link": "https://leetcode.com/problems/word-search/"
  },
  {
    "id": 231,
    "pattern": "Backtracking",
    "question": "Generate all palindrome permutations of a string.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Check feasibility (\u22641 odd-freq char). Generate half-permutations, mirror.",
    "link": "https://leetcode.com/problems/palindrome-permutation-ii/"
  },
  {
    "id": 232,
    "pattern": "Backtracking",
    "question": "Generate all letter combinations of a phone number.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Map digits to letters. Recurse generating all combos. O(4\u207f).",
    "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
  },
  {
    "id": 233,
    "pattern": "Backtracking",
    "question": "Restore all valid IP addresses from a digit string.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Try 1\u20133 digit segments (0\u2013255). Exactly 4 segments. No leading zeros. Bounded O(1).",
    "link": "https://leetcode.com/problems/restore-ip-addresses/"
  },
  {
    "id": 234,
    "pattern": "Backtracking",
    "question": "Partition an array into k equal-sum subsets.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Target = sum/k. Assign each element to a bucket. Sort desc for pruning. O(k^n).",
    "link": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/"
  },
  {
    "id": 235,
    "pattern": "Backtracking",
    "question": "Insert operators into a digit string to reach a target value.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Try +, \u2212, \u00d7 between digits. Track cumulative and last operand for \u00d7. O(4\u207f).",
    "link": "https://leetcode.com/problems/expression-add-operators/"
  },
  {
    "id": 236,
    "pattern": "Backtracking",
    "question": "Solve graph coloring or M-coloring.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Try each of M colors per vertex. Check adjacency constraints. O(M^V).",
    "link": "https://www.geeksforgeeks.org/m-coloring-problem/"
  },
  {
    "id": 237,
    "pattern": "Backtracking",
    "question": "Form a square from matchsticks or solve equivalent subset-assignment.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Partition into 4 equal subsets. Backtracking with pruning. Sort desc. O(4\u207f).",
    "link": "https://leetcode.com/problems/matchsticks-to-square/"
  },
  {
    "id": 238,
    "pattern": "Backtracking",
    "question": "Generate unique permutations when duplicates are present.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Sort. Skip if same as prev and prev not used in current branch. O(n \u00d7 n!).",
    "link": "https://leetcode.com/problems/permutations-ii/"
  },
  {
    "id": 239,
    "pattern": "DP \u2014 Linear (1D)",
    "question": "Count ways to reach the nth stair and common variants.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "dp[i] = dp[i\u22121] + dp[i\u22122]. Fibonacci-like. O(1) space possible. O(n).",
    "link": "https://leetcode.com/problems/climbing-stairs/"
  },
  {
    "id": 240,
    "pattern": "DP \u2014 Linear (1D)",
    "question": "Find the minimum cost to climb stairs.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "dp[i] = cost[i] + min(dp[i\u22121], dp[i\u22122]). O(n).",
    "link": "https://leetcode.com/problems/min-cost-climbing-stairs/"
  },
  {
    "id": 241,
    "pattern": "DP \u2014 Linear (1D)",
    "question": "Find the maximum sum of non-adjacent elements.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "dp[i] = max(dp[i\u22121], dp[i\u22122] + arr[i]). O(n) time O(1) space.",
    "link": "https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/"
  },
  {
    "id": 242,
    "pattern": "DP \u2014 Linear (1D)",
    "question": "Solve House Robber.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Same pattern: dp[i] = max(skip, rob). O(n).",
    "link": "https://leetcode.com/problems/house-robber/"
  },
  {
    "id": 243,
    "pattern": "DP \u2014 Linear (1D)",
    "question": "Solve House Robber II.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Circular: run House Robber on [0..n\u22122] and [1..n\u22121]. Take max. O(n).",
    "link": "https://leetcode.com/problems/house-robber-ii/"
  },
  {
    "id": 244,
    "pattern": "DP \u2014 Linear (1D)",
    "question": "Count the number of ways to decode a digit string to letters.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "dp[i] = dp[i\u22121] (valid single) + dp[i\u22122] (valid pair 10\u201326). O(n).",
    "link": "https://leetcode.com/problems/decode-ways/"
  },
  {
    "id": 245,
    "pattern": "DP \u2014 Linear (1D)",
    "question": "Solve Word Break.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "dp[i] = true if any dp[j] and s[j..i] in dict. O(n\u00b2 \u00d7 L) or trie-based.",
    "link": "https://leetcode.com/problems/word-break/"
  },
  {
    "id": 246,
    "pattern": "DP \u2014 Linear (1D)",
    "question": "Find the longest increasing subsequence.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "O(n\u00b2) DP. Or O(n log n) patience sorting with binary search on tails array.",
    "link": "https://leetcode.com/problems/longest-increasing-subsequence/"
  },
  {
    "id": 247,
    "pattern": "DP \u2014 Linear (1D)",
    "question": "Find the longest arithmetic subsequence.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "dp[i][diff] = length of AP ending at i with diff. HashMap per index. O(n\u00b2).",
    "link": "https://leetcode.com/problems/longest-arithmetic-subsequence/"
  },
  {
    "id": 248,
    "pattern": "DP \u2014 Linear (1D)",
    "question": "Find the longest run of consecutive 1s in a binary array.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Linear scan. Reset counter on 0, update max on 1. O(n).",
    "link": "https://leetcode.com/problems/max-consecutive-ones/"
  },
  {
    "id": 249,
    "pattern": "DP \u2014 Linear (1D)",
    "question": "Find the nth ugly number or its variants.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Three pointers for multiples of 2, 3, 5. dp[i] = min(dp[p2]\u00d72, dp[p3]\u00d73, dp[p5]\u00d75). O(n).",
    "link": "https://leetcode.com/problems/ugly-number-ii/"
  },
  {
    "id": 250,
    "pattern": "DP \u2014 Linear (1D)",
    "question": "Print the maximum number of As using four keys.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "dp[i] = i for i \u2264 6. dp[i] = max(dp[j] \u00d7 (i\u2212j\u22121)) for breakpoints j. O(n\u00b2).",
    "link": "https://leetcode.com/problems/4-keys-keyboard/"
  },
  {
    "id": 251,
    "pattern": "DP \u2014 String",
    "question": "Solve longest common subsequence.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "dp[i][j] = dp[i\u22121][j\u22121]+1 if match, else max(dp[i\u22121][j], dp[i][j\u22121]). O(m\u00d7n).",
    "link": "https://leetcode.com/problems/longest-common-subsequence/"
  },
  {
    "id": 252,
    "pattern": "DP \u2014 String",
    "question": "Solve edit distance.",
    "difficulty": "Hard",
    "week": 8,
    "solution": "dp[i][j] = dp[i\u22121][j\u22121] if match. Else 1 + min(insert, delete, replace). O(m\u00d7n).",
    "link": "https://leetcode.com/problems/edit-distance/"
  },
  {
    "id": 253,
    "pattern": "DP \u2014 String",
    "question": "Count distinct subsequences.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "dp[i][j] = dp[i\u22121][j] + (dp[i\u22121][j\u22121] if s[i]==t[j]). O(m\u00d7n).",
    "link": "https://leetcode.com/problems/distinct-subsequences/"
  },
  {
    "id": 254,
    "pattern": "DP \u2014 String",
    "question": "Solve wildcard matching.",
    "difficulty": "Hard",
    "week": 8,
    "solution": "'*' matches empty or any prefix. dp[i][j] = dp[i\u22121][j] || dp[i][j\u22121] for '*'. O(m\u00d7n).",
    "link": "https://leetcode.com/problems/wildcard-matching/"
  },
  {
    "id": 255,
    "pattern": "DP \u2014 String",
    "question": "Solve regex-style matching with . and *.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "'.' matches any. 'x*' matches 0+ x. Careful * handling in 2D DP. O(m\u00d7n).",
    "link": "https://leetcode.com/problems/regular-expression-matching/"
  },
  {
    "id": 256,
    "pattern": "DP \u2014 String",
    "question": "Solve interleaving string.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "dp[i][j] = true if s3[i+j\u22121] matches s1[i] (with dp[i\u22121][j]) or s2[j] (with dp[i][j\u22121]). O(m\u00d7n).",
    "link": "https://leetcode.com/problems/interleaving-string/"
  },
  {
    "id": 257,
    "pattern": "DP \u2014 String",
    "question": "Solve Word Break II.",
    "difficulty": "Medium",
    "week": 8,
    "solution": "Backtracking + memoization. Return all valid sentences. Cache per start index.",
    "link": "https://leetcode.com/problems/word-break-ii/"
  },
  {
    "id": 258,
    "pattern": "DP \u2014 Knapsack / Subset",
    "question": "Solve 0/1 knapsack.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "dp[i][w] = max(skip, take). Optimize to 1D iterating w backwards. O(n\u00d7W).",
    "link": "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/"
  },
  {
    "id": 259,
    "pattern": "DP \u2014 Knapsack / Subset",
    "question": "Solve unbounded knapsack or rod cutting.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "1D DP: dp[w] = max(dp[w], dp[w\u2212wt[i]] + val[i]). Iterate w forward. O(n\u00d7W).",
    "link": "https://www.geeksforgeeks.org/unbounded-knapsack-repetition-items-allowed/"
  },
  {
    "id": 260,
    "pattern": "DP \u2014 Knapsack / Subset",
    "question": "Solve coin change for minimum coins.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "dp[amt] = min(dp[amt], dp[amt \u2212 coin] + 1). O(amount \u00d7 coins).",
    "link": "https://leetcode.com/problems/coin-change/"
  },
  {
    "id": 261,
    "pattern": "DP \u2014 Knapsack / Subset",
    "question": "Solve coin change for number of ways.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "dp[amt] += dp[amt \u2212 coin]. Outer loop on coins (not amounts) to avoid permutations. O(amount \u00d7 coins).",
    "link": "https://leetcode.com/problems/coin-change-ii/"
  },
  {
    "id": 262,
    "pattern": "DP \u2014 Knapsack / Subset",
    "question": "Solve partition equal subset sum.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "Target = sum/2. Boolean knapsack: dp[j] |= dp[j \u2212 nums[i]]. O(n \u00d7 sum).",
    "link": "https://leetcode.com/problems/partition-equal-subset-sum/"
  },
  {
    "id": 263,
    "pattern": "DP \u2014 Knapsack / Subset",
    "question": "Solve weighted job scheduling or maximum profit in job scheduling.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "Sort by end. Binary search last non-overlapping. dp[i] = max(dp[i\u22121], profit[i] + dp[j]). O(n log n).",
    "link": "https://leetcode.com/problems/maximum-profit-in-job-scheduling/"
  },
  {
    "id": 264,
    "pattern": "DP \u2014 Grid",
    "question": "Count matrix paths with blocked cells.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "dp[i][j] = dp[i\u22121][j] + dp[i][j\u22121] if not blocked, else 0. O(m\u00d7n).",
    "link": "https://leetcode.com/problems/unique-paths-ii/"
  },
  {
    "id": 265,
    "pattern": "DP \u2014 Grid",
    "question": "Find the minimum path sum in a grid.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "dp[i][j] = grid[i][j] + min(dp[i\u22121][j], dp[i][j\u22121]). O(m\u00d7n).",
    "link": "https://leetcode.com/problems/minimum-path-sum/"
  },
  {
    "id": 266,
    "pattern": "DP \u2014 Grid",
    "question": "Find the minimum-cost path in a grid with constrained moves.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "DP if only down/right. Dijkstra if 4-directional with varying costs. O(m\u00d7n) or O(m\u00d7n log).",
    "link": "https://www.geeksforgeeks.org/min-cost-path-dp-6/"
  },
  {
    "id": 267,
    "pattern": "DP \u2014 Grid",
    "question": "Find the maximum path sum in a matrix.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "Top-down DP. dp[i][j] = val + max(up-left, up, up-right). O(m\u00d7n).",
    "link": "https://www.geeksforgeeks.org/maximum-path-sum-matrix/"
  },
  {
    "id": 268,
    "pattern": "DP \u2014 Grid",
    "question": "Find the longest increasing path in a matrix.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "DFS + memoization from each cell. Try 4 directions where neighbor > current. O(m\u00d7n).",
    "link": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/"
  },
  {
    "id": 269,
    "pattern": "DP \u2014 Grid",
    "question": "Solve Cherry Pickup or its common 2-agent grid variants.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "3D DP: two agents simultaneously. dp[r][c1][c2]. No double-counting same cell. O(m\u00d7n\u00b2).",
    "link": "https://leetcode.com/problems/cherry-pickup/"
  },
  {
    "id": 270,
    "pattern": "DP \u2014 Interval",
    "question": "Solve Burst Balloons.",
    "difficulty": "Hard",
    "week": 9,
    "solution": "dp[i][j] = max over k of dp[i][k] + dp[k][j] + nums[i]\u00d7nums[k]\u00d7nums[j]. O(n\u00b3).",
    "link": "https://leetcode.com/problems/burst-balloons/"
  },
  {
    "id": 271,
    "pattern": "DP \u2014 Interval",
    "question": "Solve matrix chain multiplication.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "dp[i][j] = min over k of dp[i][k] + dp[k+1][j] + cost(i,k,j). O(n\u00b3).",
    "link": "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/"
  },
  {
    "id": 272,
    "pattern": "DP \u2014 Interval",
    "question": "Solve Boolean Parenthesization.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "Track true/false counts per subexpression. Combine with AND/OR/XOR operators. O(n\u00b3).",
    "link": "https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/"
  },
  {
    "id": 273,
    "pattern": "DP \u2014 Palindrome",
    "question": "Find the longest palindromic subsequence.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "LCS of string and its reverse. Or gap DP: dp[i][j] = dp[i+1][j\u22121]+2 if match. O(n\u00b2).",
    "link": "https://leetcode.com/problems/longest-palindromic-subsequence/"
  },
  {
    "id": 274,
    "pattern": "DP \u2014 Palindrome",
    "question": "Find the longest palindromic substring.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "Expand around center (odd + even). O(n\u00b2). Or Manacher's algorithm O(n).",
    "link": "https://leetcode.com/problems/longest-palindromic-substring/"
  },
  {
    "id": 275,
    "pattern": "DP \u2014 Misc",
    "question": "Solve Paint House or minimum-cost coloring variants.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "dp[i][color] = cost[i][color] + min(dp[i\u22121][other colors]). O(n\u00d7k).",
    "link": "https://leetcode.com/problems/paint-house/"
  },
  {
    "id": 276,
    "pattern": "DP \u2014 Misc",
    "question": "Partition an array into four non-empty parts minimizing gap of segment sums.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "Prefix sums + DP/binary search. Try all partition points, minimize max\u2212min of segment sums.",
    "link": "https://www.geeksforgeeks.org/partition-into-four-parts/"
  },
  {
    "id": 277,
    "pattern": "DP \u2014 Misc",
    "question": "DP on trees or ancestor-jump queries with many queries.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "Binary lifting for LCA/kth ancestor. Or tree DP with rerooting technique. O(n log n) preprocessing.",
    "link": "https://leetcode.com/problems/kth-ancestor-of-a-tree-node/"
  },
  {
    "id": 278,
    "pattern": "DP \u2014 Misc",
    "question": "Given an equation string with one unknown X compute X.",
    "difficulty": "Medium",
    "week": 9,
    "solution": "Parse equation, collect X coefficients on one side and constants on other. Solve linear equation.",
    "link": "https://leetcode.com/problems/solve-the-equation/"
  },
  {
    "id": 279,
    "pattern": "String Pattern Matching",
    "question": "Implement substring search using KMP.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Build failure/prefix function. Use it to skip re-comparing matched chars. O(n+m).",
    "link": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"
  },
  {
    "id": 280,
    "pattern": "String Pattern Matching",
    "question": "Perform pattern search using the Z algorithm or rolling hash.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Z-array: Z[i] = length of longest prefix match starting at i. Or Rabin-Karp rolling hash. O(n+m).",
    "link": "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/"
  },
  {
    "id": 281,
    "pattern": "String Pattern Matching",
    "question": "Validate abbreviations or shorthand forms like i18n or A2S.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Two pointers. Parse number from abbreviation, skip that many chars in word. Compare rest.",
    "link": "https://leetcode.com/problems/valid-word-abbreviation/"
  },
  {
    "id": 282,
    "pattern": "String Manipulation",
    "question": "Find the longest common prefix of a list of strings.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Compare char by char across all strings. Or sort and compare first and last. O(n\u00d7m).",
    "link": "https://leetcode.com/problems/longest-common-prefix/"
  },
  {
    "id": 283,
    "pattern": "String Manipulation",
    "question": "Compress a string in place.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Two pointers: read and write. Count consecutive chars, write char + count. O(n).",
    "link": "https://leetcode.com/problems/string-compression/"
  },
  {
    "id": 284,
    "pattern": "String Manipulation",
    "question": "Reverse a string in blocks or chunks of size k.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Iterate in steps of 2k. Reverse first k chars in each block. O(n).",
    "link": "https://leetcode.com/problems/reverse-string-ii/"
  },
  {
    "id": 285,
    "pattern": "String Manipulation",
    "question": "Count subsequences that start with one character and end with another.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Count start chars seen so far. When end char found, add count. O(n).",
    "link": "https://www.geeksforgeeks.org/count-subsequences-of-type-ai-bj-ck/"
  },
  {
    "id": 286,
    "pattern": "String Manipulation",
    "question": "Convert Roman numerals to integers.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Map symbols to values. If current < next, subtract; else add. Left to right. O(n).",
    "link": "https://leetcode.com/problems/roman-to-integer/"
  },
  {
    "id": 287,
    "pattern": "String Manipulation",
    "question": "Convert an integer to Roman numeral form.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Greedy: map [1000,900,500,400,...,1] to symbols. Subtract largest, append symbol. O(1).",
    "link": "https://leetcode.com/problems/integer-to-roman/"
  },
  {
    "id": 288,
    "pattern": "Trie",
    "question": "Build a trie for insert search and prefix autocomplete.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "TrieNode: children map + isEnd. Insert/search/startsWith in O(L) per operation.",
    "link": "https://leetcode.com/problems/implement-trie-prefix-tree/"
  },
  {
    "id": 289,
    "pattern": "Trie",
    "question": "Find the longest common prefix using a trie.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "Insert all strings. Walk root while node has single child and not end-of-word. O(total chars).",
    "link": "https://www.geeksforgeeks.org/longest-common-prefix-using-trie/"
  },
  {
    "id": 290,
    "pattern": "Trie",
    "question": "Build a word dictionary that supports wildcard queries.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Trie + DFS for '.' wildcard. On '.', try all children. O(26^dots \u00d7 L) worst case.",
    "link": "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
  },
  {
    "id": 291,
    "pattern": "Trie",
    "question": "Design search suggestions or autocomplete using a trie.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "Walk trie to prefix node. DFS to collect top 3 lexicographic matches. O(n\u00d7L).",
    "link": "https://leetcode.com/problems/search-suggestions-system/"
  },
  {
    "id": 292,
    "pattern": "Trie",
    "question": "Solve maximum XOR or XOR queries with a trie.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "Binary trie (MSB to LSB). For max XOR, greedily choose opposite bit. O(n \u00d7 32).",
    "link": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"
  },
  {
    "id": 293,
    "pattern": "Trie",
    "question": "Replace words in a sentence using dictionary roots stored in a trie.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "Build trie from roots. For each word, find shortest prefix match. Replace. O(n\u00d7L).",
    "link": "https://leetcode.com/problems/replace-words/"
  },
  {
    "id": 294,
    "pattern": "Trie",
    "question": "Solve Word Search II using trie plus backtracking.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "Trie from words. Backtrack on grid from trie root. Prune when no match. O(m\u00d7n\u00d74^L).",
    "link": "https://leetcode.com/problems/word-search-ii/"
  },
  {
    "id": 295,
    "pattern": "Segment Tree / BIT",
    "question": "Build a segment tree for range min max or sum queries.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "Build O(n). Query and update O(log n). Array-based or node-based.",
    "link": "https://www.geeksforgeeks.org/segment-tree-data-structure/"
  },
  {
    "id": 296,
    "pattern": "Segment Tree / BIT",
    "question": "Use a segment tree with a custom range condition such as max \u2212 min < k.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "Store both min and max per node. Merge intervals. Query checks condition. O(n log n).",
    "link": "https://www.geeksforgeeks.org/segment-tree-set-2-range-maximum-query-node-update/"
  },
  {
    "id": 297,
    "pattern": "Segment Tree / BIT",
    "question": "Use a Fenwick tree or BIT for prefix sums and inversion-style queries.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "update(i, delta) and query(i) in O(log n). Great for prefix sums and inversions.",
    "link": "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/"
  },
  {
    "id": 298,
    "pattern": "Segment Tree / BIT",
    "question": "Count inversions using a BIT or segment tree.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "Process right to left. Query BIT for count of smaller seen. Update. O(n log n).",
    "link": "https://www.geeksforgeeks.org/count-inversions-array-set-3-using-bit/"
  },
  {
    "id": 299,
    "pattern": "Segment Tree / BIT",
    "question": "Support range updates and point queries with a BIT or segment tree.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "Difference array + BIT. Range update [l,r]: update(l, val), update(r+1, \u2212val). Point query = prefix sum.",
    "link": "https://www.geeksforgeeks.org/binary-indexed-tree-range-updates-point-queries/"
  },
  {
    "id": 300,
    "pattern": "Binary Lifting / Sparse Table",
    "question": "Use binary lifting for kth ancestor or jump queries on a tree.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Precompute up[v][k] = 2^k-th ancestor. Jump by decomposing k into powers of 2. O(n log n) build.",
    "link": "https://leetcode.com/problems/kth-ancestor-of-a-tree-node/"
  },
  {
    "id": 301,
    "pattern": "Binary Lifting / Sparse Table",
    "question": "Use a sparse table for static range minimum or maximum query.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "table[i][j] = min of 2^j elements from i. Query: overlap two blocks. O(n log n) build O(1) query.",
    "link": "https://www.geeksforgeeks.org/sparse-table/"
  },
  {
    "id": 302,
    "pattern": "Data Structure Design",
    "question": "Design an LRU cache.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "HashMap + doubly linked list. Get/put O(1). Accessed \u2192 move to front. Evict from tail.",
    "link": "https://leetcode.com/problems/lru-cache/"
  },
  {
    "id": 303,
    "pattern": "Data Structure Design",
    "question": "Design a modified LRU cache where values are lists and get consumes from front.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "LRU + deque per key. Get pops front. If empty, remove entry.",
    "link": "https://www.geeksforgeeks.org/lru-cache-implementation/"
  },
  {
    "id": 304,
    "pattern": "Data Structure Design",
    "question": "Design a string-keyed photo cache or similar cache with eviction policy.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "LRU/LFU with string keys. Track memory/count limits. HashMap + ordered structure.",
    "link": "https://www.geeksforgeeks.org/lru-cache-implementation/"
  },
  {
    "id": 305,
    "pattern": "Data Structure Design",
    "question": "Design an LFU cache.",
    "difficulty": "Hard",
    "week": 10,
    "solution": "HashMap + frequency buckets (doubly linked lists). Track minFreq. O(1) get/put.",
    "link": "https://leetcode.com/problems/lfu-cache/"
  },
  {
    "id": 306,
    "pattern": "Data Structure Design",
    "question": "Design an All O(1) data structure supporting frequency updates.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "HashMap + doubly linked list of frequency buckets. inc/dec/getMax/getMin all O(1).",
    "link": "https://leetcode.com/problems/all-oone-data-structure/"
  },
  {
    "id": 307,
    "pattern": "Data Structure Design",
    "question": "Design a RandomizedSet with O(1) insert delete and get-random.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "HashMap (val\u2192idx) + ArrayList. Delete: swap with last, pop. Random: random index. O(1).",
    "link": "https://leetcode.com/problems/insert-delete-getrandom-o1/"
  },
  {
    "id": 308,
    "pattern": "Data Structure Design",
    "question": "Design a RandomizedCollection that allows duplicates.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "HashMap (val\u2192set of indices) + ArrayList. Swap-delete trick. Handle index sets. O(1) avg.",
    "link": "https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/"
  },
  {
    "id": 309,
    "pattern": "Data Structure Design",
    "question": "Design a time-based key-value store.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "HashMap (key \u2192 list of (timestamp, value)). Binary search on timestamp for get. O(log n).",
    "link": "https://leetcode.com/problems/time-based-key-value-store/"
  },
  {
    "id": 310,
    "pattern": "Data Structure Design",
    "question": "Design browser history with back and forward navigation.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Two stacks or doubly linked list. Visit clears forward. O(1) per operation.",
    "link": "https://leetcode.com/problems/design-browser-history/"
  },
  {
    "id": 311,
    "pattern": "Data Structure Design",
    "question": "Design a circular deque.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Array with front/rear pointers. Wrap with modulo. All operations O(1).",
    "link": "https://leetcode.com/problems/design-circular-deque/"
  },
  {
    "id": 312,
    "pattern": "Data Structure Design",
    "question": "Design a snapshot array.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Per-index list of (snap_id, value). Binary search on snap_id for get. O(log S) get.",
    "link": "https://leetcode.com/problems/snapshot-array/"
  },
  {
    "id": 313,
    "pattern": "Data Structure Design",
    "question": "Design an in-memory file system path structure.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Trie of path components. Each node: children map, optional content, isFile flag.",
    "link": "https://leetcode.com/problems/design-in-memory-file-system/"
  },
  {
    "id": 314,
    "pattern": "Data Structure Design",
    "question": "Design a leaderboard with score updates and top-k queries.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "HashMap + sorted structure (TreeMap). addScore/top/reset. O(log n) per op.",
    "link": "https://leetcode.com/problems/design-a-leaderboard/"
  },
  {
    "id": 315,
    "pattern": "Data Structure Design",
    "question": "Design a stock price fluctuation tracker.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "HashMap (timestamp\u2192price) + TreeMap or two heaps for max/min. O(log n).",
    "link": "https://leetcode.com/problems/stock-price-fluctuation/"
  },
  {
    "id": 316,
    "pattern": "Data Structure Design",
    "question": "Design a structure that supports add(x) and query(largest <= x).",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Balanced BST with floor operation. Or sorted list + binary search. O(log n) per op.",
    "link": "https://www.geeksforgeeks.org/floor-in-a-sorted-array/"
  },
  {
    "id": 317,
    "pattern": "Data Structure Design",
    "question": "Design an inverted index or word-search engine over a document collection.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Map each word to document ID list. Multi-word = intersect posting lists. TF-IDF for ranking.",
    "link": "https://www.geeksforgeeks.org/inverted-index/"
  },
  {
    "id": 318,
    "pattern": "Data Structure Design",
    "question": "Explain or implement external sorting for data larger than memory.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Split into memory-sized chunks. Sort each. K-way merge with min-heap. O(n log n).",
    "link": "https://www.geeksforgeeks.org/external-sorting/"
  },
  {
    "id": 319,
    "pattern": "Bit Manipulation / XOR",
    "question": "Find the two numbers that appear once when every other appears twice.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "XOR all \u2192 xor of two uniques. Split by any set bit. XOR each group separately. O(n).",
    "link": "https://leetcode.com/problems/single-number-iii/"
  },
  {
    "id": 320,
    "pattern": "Bit Manipulation / XOR",
    "question": "Find the unique number when every other number appears three times.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "For each bit position, sum bits mod 3. Or use two bitmasks (ones, twos). O(n).",
    "link": "https://leetcode.com/problems/single-number-ii/"
  },
  {
    "id": 321,
    "pattern": "Bit Manipulation / XOR",
    "question": "Count set bits from 1 to n.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "For each bit position, count cycles of 0s and 1s. Or formula with highest set bit. O(log n).",
    "link": "https://leetcode.com/problems/counting-bits/"
  },
  {
    "id": 322,
    "pattern": "Bit Manipulation / XOR",
    "question": "Check whether a number is a power of two or a power of four.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Power of 2: n > 0 && (n & (n\u22121)) == 0. Power of 4: also no odd-position bits. O(1).",
    "link": "https://leetcode.com/problems/power-of-two/"
  },
  {
    "id": 323,
    "pattern": "Bit Manipulation / XOR",
    "question": "Find a missing number and a repeated number using bit manipulation.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "XOR all elements and 1..n. Use set-bit to partition into two groups. O(n).",
    "link": "https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/"
  },
  {
    "id": 324,
    "pattern": "Bit Manipulation / XOR",
    "question": "Generate Gray code.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "i XOR (i >> 1) for i in 0..2\u207f\u22121. Or recursive: reflect and prepend 0/1.",
    "link": "https://leetcode.com/problems/gray-code/"
  },
  {
    "id": 325,
    "pattern": "Bit Manipulation / XOR",
    "question": "Add two integers without using +.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "XOR for sum without carry. AND << 1 for carry. Repeat until carry = 0. O(32).",
    "link": "https://leetcode.com/problems/sum-of-two-integers/"
  },
  {
    "id": 326,
    "pattern": "Bit Manipulation / XOR",
    "question": "Divide two integers without using / * or %.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Subtract divisor shifted left (powers of 2). Binary long division. O(32).",
    "link": "https://leetcode.com/problems/divide-two-integers/"
  },
  {
    "id": 327,
    "pattern": "Math / Number Theory",
    "question": "Compute Euler's totient function.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "phi(n) = n \u00d7 \u220f(1 \u2212 1/p) for prime factors p. Factorize first. O(\u221an).",
    "link": "https://www.geeksforgeeks.org/eulers-totient-function/"
  },
  {
    "id": 328,
    "pattern": "Math / Number Theory",
    "question": "Count trailing zeroes in a factorial.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Count factors of 5: n/5 + n/25 + n/125 + ... O(log n).",
    "link": "https://leetcode.com/problems/factorial-trailing-zeroes/"
  },
  {
    "id": 329,
    "pattern": "Math / Number Theory",
    "question": "Compute fast power x^n in O(log n).",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Binary exponentiation. Odd \u2192 x \u00d7 power(x, n\u22121). Even \u2192 power(x\u00b2, n/2). Handle negative n.",
    "link": "https://leetcode.com/problems/powx-n/"
  },
  {
    "id": 330,
    "pattern": "Math / Number Theory",
    "question": "Convert a number from one base to another.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "To base 10 first (multiply by base powers). Then to target (repeated division). O(digits).",
    "link": "https://www.geeksforgeeks.org/convert-base-decimal-vice-versa/"
  },
  {
    "id": 331,
    "pattern": "Math / Number Theory",
    "question": "Convert a fraction to recurring decimal form.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Long division. HashMap of remainder \u2192 position. When remainder repeats, insert parentheses.",
    "link": "https://leetcode.com/problems/fraction-to-recurring-decimal/"
  },
  {
    "id": 332,
    "pattern": "Math / Number Theory",
    "question": "Use gcd or lcm reasoning for problems like the water jug puzzle.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Euclidean gcd. lcm = a\u00d7b/gcd. Water jug: solvable iff target % gcd(a,b) == 0.",
    "link": "https://leetcode.com/problems/water-and-jug-problem/"
  },
  {
    "id": 333,
    "pattern": "Math / Number Theory",
    "question": "Generate primes in a range using sieve-based techniques.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Sieve of Eratosthenes: mark multiples. O(n log log n). Segmented sieve for large ranges.",
    "link": "https://leetcode.com/problems/count-primes/"
  },
  {
    "id": 334,
    "pattern": "Math / Number Theory",
    "question": "Compute modular exponentiation and reason about modular inverse basics.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Binary exp with mod. Inverse: power(a, mod\u22122, mod) when mod is prime (Fermat's little theorem).",
    "link": "https://www.geeksforgeeks.org/modular-exponentiation-power-in-modular-arithmetic/"
  },
  {
    "id": 335,
    "pattern": "Math / Number Theory",
    "question": "Check whether a number is a perfect square without directly using square root.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Binary search on [0, n]. Check mid\u00d7mid == n. Or Newton's method. O(log n).",
    "link": "https://leetcode.com/problems/valid-perfect-square/"
  },
  {
    "id": 336,
    "pattern": "Math / Number Theory",
    "question": "Solve the bulb-switching problem.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Bulb stays on iff toggled odd times = perfect square index. Answer = floor(\u221an).",
    "link": "https://leetcode.com/problems/bulb-switcher/"
  },
  {
    "id": 337,
    "pattern": "Math / Number Theory",
    "question": "Count cubes with 0 1 2 or 3 painted faces after painting outside.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "3 faces: 8 corners. 2 faces: 12(n\u22122) edges. 1 face: 6(n\u22122)\u00b2. 0 faces: (n\u22122)\u00b3.",
    "link": "https://www.geeksforgeeks.org/painted-cube-puzzle/"
  },
  {
    "id": 338,
    "pattern": "Math / Number Theory",
    "question": "Handle square-root exponentiation overflow and modular-arithmetic edge cases.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Use long/BigInteger. Check overflow before multiply. Apply mod consistently.",
    "link": "https://www.geeksforgeeks.org/how-to-avoid-overflow-in-modular-multiplication/"
  },
  {
    "id": 339,
    "pattern": "Math / Number Theory",
    "question": "Find the length of the longest run of consecutive 1s in a binary array.",
    "difficulty": "Medium",
    "week": 10,
    "solution": "Linear scan. Reset counter on 0, update max on 1. O(n).",
    "link": "https://leetcode.com/problems/max-consecutive-ones/"
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTIONS;
}

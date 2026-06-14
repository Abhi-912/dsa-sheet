import csv
import json
import os

def generate_data():
    csv_path = "DSA_Question_Bank.csv"
    js_path = "data.js"
    
    if not os.path.exists(csv_path):
        print(f"Error: {csv_path} not found in the current directory.")
        return

    questions = []

    def get_week(q_num):
        if q_num <= 38: return 1
        elif q_num <= 70: return 2
        elif q_num <= 104: return 3
        elif q_num <= 131: return 4
        elif q_num <= 159: return 5
        elif q_num <= 198: return 6
        elif q_num <= 221: return 7
        elif q_num <= 257: return 8
        elif q_num <= 278: return 9
        else: return 10

    with open(csv_path, mode='r', encoding='utf-8') as f:
        reader = csv.reader(f)
        header = next(reader)
        for row in reader:
            if not row or len(row) < 6:
                continue
            q_id_str = row[0].strip()
            if not q_id_str:
                continue
            
            try:
                q_id = int(q_id_str)
            except ValueError:
                continue
                
            pattern = row[1].strip()
            question_text = row[2].strip()
            status = row[3].strip()
            solution = row[4].strip()
            link = row[5].strip()
            
            # Determine estimated difficulty dynamically
            difficulty = "Medium"
            lower_q = question_text.lower()
            lower_sol = solution.lower()
            
            # Heuristics for Easy
            if any(kw in lower_q for kw in ["two-sum", "palindrome after", "reverse a singly", "detect a loop", "middle node", "maximum depth", "balanced binary tree", "valid parentheses", "merge two sorted", "invert a binary", "fizz buzz", "climbing stairs", "single number", "reverse string", "has a cycle", "implement queue using two stacks", "implement stack using queues", "min stack", "balanced brackets", "equilibrium or pivot", "first non-repeating", "valid anagram", "lemonade change", "assign cookies"]):
                difficulty = "Easy"
            elif any(kw in lower_sol for kw in ["two-pass", "one-pass", "hashmap to count", "frequency count array of size 26", "stack. push", "simple dfs", "simple bfs", "standard bfs"]):
                if "hard" not in lower_sol and "hard" not in lower_q:
                    difficulty = "Easy"
                    
            # Heuristics for Hard
            if any(kw in lower_q for kw in ["trapped rain water", "median of two sorted", "merge k sorted", "maximal rectangle", "largest rectangle in a histogram", "alien dictionary", "critical connections", "articulation points", "serialize and deserialize", "lru cache", "lfu cache", "expression add operators", "binary tree maximum path sum", "sudoku solver", "n-queens", "word search ii", "edit distance", "burst balloons", "regular expression", "wildcard matching", "longest chunked palindrome", "maximum sum queries", "k-th smallest", "kth smallest", "segment tree", "trie"]):
                difficulty = "Hard"
            elif "hard" in lower_q or "hard" in lower_sol or "hard-level" in lower_sol:
                difficulty = "Hard"
                
            week = get_week(q_id)
            
            questions.append({
                "id": q_id,
                "pattern": pattern,
                "question": question_text,
                "difficulty": difficulty,
                "week": week,
                "solution": solution,
                "link": link
            })

    # Output data.js file
    with open(js_path, "w", encoding="utf-8") as out:
        out.write("// Dynamic DSA Questions Database generated from DSA_Question_Bank.csv\n")
        out.write("const QUESTIONS = ")
        json.dump(questions, out, indent=2)
        out.write(";\n\n")
        out.write("if (typeof module !== 'undefined' && module.exports) {\n")
        out.write("    module.exports = QUESTIONS;\n")
        out.write("}\n")
        
    print(f"Successfully generated {js_path} with {len(questions)} questions.")

if __name__ == "__main__":
    generate_data()

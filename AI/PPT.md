### Team roles
- Shardendu: explain what CSP is, introduce cryptarithmetic, outline problem details (variables/domains/constraint graph), and CSP framing.[1]
- Niti: work through a concrete step-by-step example — encoding SEND + MORE = MONEY as variables, domains, and constraints, with column-by-column explanation.[1]
- Advt: discuss solution approach — plain backtracking, all-different constraints, leading-zero rules, and optional heuristics or optimizations (e.g., ordering).[1]
- Anas: code walkthrough — show and explain the C++ implementation, run/demo output, detail constraint checking via code.[2][3]

### Slide deck outline
- Title: Constraint Satisfaction for Cryptarithmetic (SEND + MORE = MONEY) — C++ Implementation.[1]
- Motivation: Why CSP techniques optimize brute-force search for puzzles, can prune impossible assignments early.[1]
- What is a CSP: define variables (X), domains (D), constraints (C); state partial/complete assignments, constraint graph.[1]
- Cryptarithmetic as CSP: enforce digit uniqueness, add arithmetic constraints, forbid leading zeros.[1]
- Example (SEND + MORE = MONEY): step-wise modeling as CSP — letter-to-variable mapping, AllDifferent, carry handling per column.[1]
- Approach: algorithm overview — recursive backtracking over variables with constraint checks at every step; optionally, how optimizations like MRV or orderings matter.[2][1]
- Implementation (C++): how variables/domains are encoded, constraint checks, and recursive solve routine.[3][2]
- Demo and results: sample output ("S = 9, E = 5...", SEND = nnnn, ...) and discussion of branch pruning/efficiency gains.[3][2]
- Q&A, extensions: broader uses, variants (TWO+TWO=FOUR), performance tradeoffs, open questions.[1]

### Shardendu: problem and CSP basics
- Define CSP as a problem involving variables $$X$$, domains $$D$$, and constraints $$C$$ where the goal is to assign all variables without violating constraints.[1]
- Introduce the constraint graph: nodes as variables, edges as constraints, visualization possible but optional in slides.[1]
- Cryptarithmetic requirement: assign a unique digit to each letter, no leading zero for leftmost letters.[1]

### Niti: worked example — modeling SEND + MORE = MONEY
- Variables: $$X = \{S,E,N,D,M,O,R,Y\}$$, all with domains $$\{0,\dots,9\}$$, plus AllDifferent across all letters.[1]
- Arithmetic constraints: express column-by-column addition with possible carries and ensure the numerical sum satisfies the equation, with examples for each column.[1]
- Include leading zero exclusion for 'S' and 'M'.[1]

### Advt: approach and techniques
- Solution is recursive backtracking: assign variables one by one, check constraints (uniqueness, arithmetic).[2][3]
- Early termination if a constraint is violated at any stage.
- Can mention more advanced CSP methods like forward checking (optional), but main focus here is clear, understandable code.[3][2]

### Anas: C++ code implementation
- Each character is assigned a digit, no duplicates, recursion solves letters, constraint checks are enforced at each step.[2][3]
- Key checks: all letters get a unique digit, arithmetic equation SEND + MORE = MONEY holds, no leading zero for 'S' or 'M'.[2]
- Final output prints variable assignments and calculated numbers.[3][2]

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

// Unique characters: S, E, N, D, M, O, R, Y
vector<char> letters = {'S','E','N','D','M','O','R','Y'};
int assigned[8]; // Stores the assigned digit for each letter
bool used[10];   // Used digits

// Convert word to number based on current assignment
int wordToNum(string word) {
    int result = 0;
    for(char c : word) {
        int idx = find(letters.begin(), letters.end(), c) - letters.begin();
        result = result * 10 + assigned[idx];
    }
    return result;
}

bool check() {
    int send = wordToNum("SEND");
    int more = wordToNum("MORE");
    int money = wordToNum("MONEY");
    // No leading zeros
    if(assigned[0] == 0 || assigned[4] == 0) return false; // S and M
    return send + more == money;
}

bool solve(int pos) {
    if(pos == 8)
        return check();

    for(int d=0; d<=9; d++) {
        if(!used[d]) {
            assigned[pos] = d;
            used[d] = true;
            if(solve(pos+1))
                return true;
            used[d] = false;
        }
    }
    return false;
}

int main() {
    fill(assigned, assigned+8, -1);
    fill(used, used+10, false);
    if(solve(0)) {
        for(int i=0; i<8; i++)
            cout << letters[i] << " = " << assigned[i] << endl;
        cout << "SEND  = " << wordToNum("SEND") << endl;
        cout << "MORE  = " << wordToNum("MORE") << endl;
        cout << "MONEY = " << wordToNum("MONEY") << endl;
    } else {
        cout << "No solution" << endl;
    }
    return 0;
}
```

### Speaker breakdown
| Speaker   | Slides/Focus              | Main Content                                                                        |
|-----------|--------------------------|-------------------------------------------------------------------------------------|
| Shardendu | 2–4                      | CSP intro, variables/domains/constraints, constraint graph, cryptarithmetic framing  |
| Niti      | 5–6                      | Stepwise setup of SEND + MORE = MONEY as CSP, modeling, and constraints             |
| Advt      | 7–8                      | Backtracking solution overview, constraint checks, possible optimizations            |
| Anas      | 9–10                     | Full C++ code with explanation, run/demonstrate results                             |

- Keep each contribution short and technical, refer to equations and actual code/output clearly for clarity.[3][2][1]

[1](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/81615547/4a9f76d4-32ab-4ed3-878b-b4e1097134b8/Unit-3-5CSP.pdf)
[2](https://www.geeksforgeeks.org/dsa/c-code-article-backtracking-set-8-solving-cryptarithmetic-puzzles/)
[3](https://www.geeksforgeeks.org/dsa/solving-cryptarithmetic-puzzles/)

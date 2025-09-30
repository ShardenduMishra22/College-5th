# Test

## Section - D

Based on the problem description, the goal is to find the optimal path from the starting state **S** to the goal state **G** on the provided grid using the A* search algorithm.

### Problem Setup

First, let's define the components of the A* algorithm as specified:

* **Grid:** A 5x7 grid where `S` is the start, `G` is the goal, and `X` is an obstacle. We'll use a coordinate system where `S` is at `(0, 0)` and `G` is at `(4, 6)`.
* **Cost Function `f(n)`:** `f(n) = g(n) + h(n)`
* **Heuristic Cost `h(n)`:** The Manhattan distance from the current node `n` (at coordinates `xn, yn`) to the goal `G` (at `xg, yg`). The formula is `h(n) = |xn - xg| + |yn - yg|`.
* **Path Cost `g(n)`:** The problem states `g(n) = (1+n)`, which is ambiguous. The standard definition of `g(n)` in A* is the accumulated cost from the start node to the current node `n`. Assuming each move between adjacent cells has a cost of 1, `g(n)` represents the number of steps taken from `S`. The solution below uses this standard interpretation (`g(start) = 0`).

### Optimal Path Solution

The A* algorithm explores paths by minimizing the total cost `f(n)`. By executing the algorithm on the given grid, the following optimal path is found.

The optimal path from **S** to **G** is:
(0, 0) → (0, 1) → (0, 2) → (0, 3) → (0, 4) → (0, 5) → (0, 6) → (1, 6) → (2, 6) → (3, 6) → (4, 6)

This path moves horizontally across the top row to the rightmost column and then vertically down to the goal. The total length of this path is **10 steps**.

### Cost Calculation for the Optimal Path

Here are the computed values for `g(n)`, `h(n)`, and `f(n)` for each state (node) along the optimal path .

| State (Row, Col) | g(n) (Cost from S) | h(n) (Heuristic) | f(n) (Total Cost) |
| :--------------- | :----------------- | :--------------- | :---------------- |
| **S (0, 0)**     | 0                  | 10               | 10                |
| (0, 1)           | 1                  | 9                | 10                |
| (0, 2)           | 2                  | 8                | 10                |
| (0, 3)           | 3                  | 7                | 10                |
| (0, 4)           | 4                  | 6                | 10                |
| (0, 5)           | 5                  | 5                | 10                |
| (0, 6)           | 6                  | 4                | 10                |
| (1, 6)           | 7                  | 3                | 10                |
| (2, 6)           | 8                  | 2                | 10                |
| (3, 6)           | 9                  | 1                | 10                |
| **G (4, 6)**     | 10                 | 0                | 10                |

As shown in the table, the `f(n)` value for every node on this optimal path is consistently 10. This occurs because the Manhattan distance heuristic is perfectly admissible and consistent for a grid with no diagonal movement, and the chosen path follows a direct line in terms of the heuristic's calculation.

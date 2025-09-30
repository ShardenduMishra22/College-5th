#include <bits/stdc++.h>
using namespace std;

int n = 4;
vector<vector<int>> dist = {
    {0, 10, 15, 20},
    {10, 0, 35, 25},
    {15, 35, 0, 30},
    {20, 25, 30, 0}
};

int ans = INT_MAX;

void tsp(int pos, int cnt, int cost, vector<bool>& visited) {
    if (cost >= ans) return; // prune

    if (cnt == n) {
        ans = min(ans, cost + dist[pos][0]);
        return;
    }

    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            tsp(i, cnt + 1, cost + dist[pos][i], visited);
            visited[i] = false;
        }
    }
}

int main() {
    vector<bool> visited(n, false);
    visited[0] = true;
    tsp(0, 1, 0, visited);
    cout << "Minimum cost: " << ans << "\n";
}

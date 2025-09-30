// Brute Force Approach for Longest Increasing Subsequence (LIS)
#include <bits/stdc++.h>
using namespace std;

int lis_brute(int i, int prev, const vector<int>& arr) {
    if (i == arr.size()) return 0;

    int taken = 0;
    if (arr[i] > prev)
        taken = 1 + lis_brute(i + 1, arr[i], arr);

    int not_taken = lis_brute(i + 1, prev, arr);

    return max(taken, not_taken);
}

int main() {
    vector<int> arr = {10, 22, 9, 33, 21, 50, 41, 60};
    int result = lis_brute(0, INT_MIN, arr);
    cout << "Length of LIS: " << result << "\n";
}

// O(2^n) time complexity

#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> arr = {10, 22, 9, 33, 21, 50, 41, 60};
    int n = arr.size();
    int lis = 1;

    for (int i = 0; i < n; i++) {
        int length = 1;
        int last = arr[i];
        for (int j = i + 1; j < n; j++) {
            if (arr[j] > last) {
                length++;
                last = arr[j];
            }
        }
        lis = max(lis, length);
    }

    cout << "Length of LIS: " << lis << "\n";
}

// O(n^2) time complexity wrong approach

#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> arr = {5, 100, 6, 7, 8, 9};
    int n = arr.size();

    vector<int> dp(n, 1);   // dp[i] = LIS ending at i
    vector<int> parent(n, -1); // to reconstruct sequence

    int lis_len = 1, lis_end = 0;

    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
            }
        }
        if (dp[i] > lis_len) {
            lis_len = dp[i];
            lis_end = i;
        }
    }

    cout << "Length of LIS: " << lis_len << "\n";

    // reconstruct LIS sequence
    vector<int> lis;
    for (int i = lis_end; i != -1; i = parent[i])
        lis.push_back(arr[i]);
    reverse(lis.begin(), lis.end());

    cout << "LIS sequence: ";
    for (int x : lis) cout << x << " ";
    cout << "\n";
}

// O(n^2) time complexity correct approach
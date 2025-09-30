#include <bits/stdc++.h>
using namespace std;

vector<int> primeFactors(int n) {
    vector<int> factors;
    for (int p = 2; p * p <= n; p++) {
        while (n % p == 0) {
            factors.push_back(p);
            n /= p;
        }
    }
    if (n > 1) factors.push_back(n);
    return factors;
}

int main() {
    int a = 12, b = 18;
    map<int, int> cntA, cntB;

    for (int p : primeFactors(a)) cntA[p]++;
    for (int p : primeFactors(b)) cntB[p]++;

    long long lcm = 1;
    set<int> primes;
    for (auto &x : cntA) primes.insert(x.first);
    for (auto &x : cntB) primes.insert(x.first);

    for (int p : primes) {
        int expA = cntA[p];
        int expB = cntB[p];
        int exp = max(expA, expB);
        while (exp--) lcm *= p;
    }

    cout << "LCM = " << lcm << "\n";
}

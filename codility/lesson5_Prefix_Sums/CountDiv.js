function solution(A, B, K) {
    return Math.ceil((B - A + 1 - (K - (A % K)) % K) / K);
}
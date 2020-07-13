function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    if(len === 0 || len ===1) return 0;
    A.sort((p1, p2) => p1 - p2);
    
    for(let i=2; i<len; i++){
        if(A[i-2] + A[i-1] > A[i] && A[i-1] + A[i] > A[i-2] && A[i] + A[i-2] > A[i-1]){
            return 1;
        }
    }
    return 0;
}
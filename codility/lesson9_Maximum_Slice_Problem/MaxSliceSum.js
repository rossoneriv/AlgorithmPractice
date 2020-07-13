function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const len = A.length;
    let lMax = A[0];
    let gMax = A[0];
    
    for(let i=1; i<len; i++){
        lMax = Math.max(A[i], lMax + A[i]);
        gMax = Math.max(gMax, lMax);
    }
    
    return gMax;
}
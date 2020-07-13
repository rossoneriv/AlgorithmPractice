function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const len = A.length;
    if(len === 0)   return 0;
    const gap = new Array(len);
    let subSum = new Array(len);
    for(let i=0; i<len; i++) {
        gap[i] = 0;
        subSum[i] = 0;
    }
    
    for(let i=1; i<len; i++)    gap[i] = A[i] - A[i-1];
    
    let max = -Infinity;

    for(let i=1; i<len; i++){
        subSum[i] = subSum[i-1] + gap[i] > 0 ? subSum[i-1] + gap[i] : 0;
        max = Math.max(max, subSum[i]);
    }
    return max;
}
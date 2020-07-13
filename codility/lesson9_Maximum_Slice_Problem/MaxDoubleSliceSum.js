function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let len = A.length;
    let leftSum = new Array(len);
    let rightSum = new Array(len);
    
    for(let i=0; i<len; i++){
        leftSum[i] = 0;
        rightSum[i] = 0;
    }
    
    for(let i=1; i<len-1; i++){
        leftSum[i] = leftSum[i-1] + A[i] > 0 ? leftSum[i-1] + A[i] : 0;
    }
    
    for(let i=len-2; i>=1; i--){
        rightSum[i] = rightSum[i+1] + A[i] > 0 ? rightSum[i+1] + A[i] : 0;
    }
    
    let max = -Infinity;
    for(let i=1; i<len-1; i++){
        max = Math.max(max, leftSum[i-1] + rightSum[i+1]);
    }
    
    return max;
}
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const sqrtN = Math.sqrt(N);
    let numSet = [];
    for(let i=1; i<=sqrtN; i++){
        if(N % i === 0){
            numSet.push([i, N/i]);
        }
    }
    
    let min = Infinity;
    const len = numSet.length;
    for(let i=0; i<len; i++){
        min = Math.min(min, 2*(numSet[i][0] + numSet[i][1]));
    }
    return min;
}
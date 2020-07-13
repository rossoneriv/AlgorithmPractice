function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = Math.sqrt(N);
    let cnt = 0;
    for(let i=1; i<=n; i++){
        if(N%i === 0){
            if(i === n) cnt++;
            else cnt += 2;
        }
    }
    return cnt;
}
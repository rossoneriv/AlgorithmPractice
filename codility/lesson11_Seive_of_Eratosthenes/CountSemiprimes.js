function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let che = new Array(N+1);
    let prime = [];
    
    const isPrime = (num) => {
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num % i === 0)   return false;
        }
        return true;
    }
    
    for(let i=2; (i<=N); i++){
        if(!che[i]){ 
            if(isPrime(i)){
                che[i] = 1;
                if(i*i <= N) che[i*i] = 2;
                for(let j=0; j<prime.length; j++){
                    if(i*prime[j] <= N) che[i*prime[j]] = 2;
                }
                prime.push(i);
            }
        }
    }
    
    let res = [];
    let len = P.length;
    let cnt;
    for(let i=0; i<len; i++){
        cnt = 0;
        for(let j=P[i]; j<=Q[i]; j++){
            if(che[j] === 2)    cnt++;
        }
        res.push(cnt);
    }
    return res;
}
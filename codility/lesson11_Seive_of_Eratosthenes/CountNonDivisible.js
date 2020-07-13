function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const len = A.length;
    let che = A.reduce( (acc, num) => {
        if(num in acc) acc[num]++;
        else acc[num] = 1;
        return acc;
    }, {});
    
    let res = [];
    let localCnt;
    let n;
    for(let i=0; i<len; i++){
        localCnt = 0;
        n = Math.sqrt(A[i]);
        for(let j=1; j<=n; j++){
            if(A[i] % j === 0){
                if(A.includes(j)) localCnt = localCnt + che[j];
                if(A.includes(A[i]/j) && A[i]/j !== j)  localCnt = localCnt + che[A[i]/j];
            }
        }
        res[i] = (len - localCnt);
    }
    return res;
}
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const len = A.length;
    let countObj = A.reduce( (acc, num) => {
        if(num in acc) acc[num]++;
        else acc[num] = 1;
        return acc;
    }, {});
    
    const leaderCnt = Math.max(...(Object.values(countObj)));
    if(leaderCnt <= len/2) return 0;
    const leader = Object.keys(countObj).find(key => countObj[key] === leaderCnt);
    
    let leftLeaderCnt = 0;
    let rightLeaderCnt;
    let res = 0;
    for(let i=1; i<A.length; i++){
        if(A[i-1] === Number(leader)) {
            leftLeaderCnt++;
        }
        rightLeaderCnt = leaderCnt - leftLeaderCnt;
        if(leftLeaderCnt > i/2 && rightLeaderCnt > (len-i)/2) res++;
    }
    
    return res;
}
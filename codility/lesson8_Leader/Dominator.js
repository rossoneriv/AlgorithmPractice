function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const len = A.length;
    let countObj = A.reduce((acc, num) => {
        if(num in acc) acc[num]++;
        else acc[num] = 1;
        return acc;
    }, {});
    const dominatorVal = Math.max(...(Object.values(countObj)));
    if(dominatorVal <= len/2) return -1;
    const dominatorKey = Object.keys(countObj).find(key => countObj[key] === dominatorVal);
    
    for(let i=0; i<len; i++){
        if(A[i] === Number(dominatorKey)) {
            return i;
        }
    }
    return -1;
}
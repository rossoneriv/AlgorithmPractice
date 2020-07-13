function solution(A) {
    const len = A.length;
    const max = Math.max(...(A));
    let setArr = new Set();
    for(let i=0; i<len; i++){
        setArr.add(A[i]);
    }
    if(len !== max) return 0;
    else if(setArr.size !== len) return 0;
    else return 1;
}
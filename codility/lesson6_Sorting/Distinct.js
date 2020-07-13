function solution(A) {
    let setA = new Set();
    const len = A.length;
    
    for(let i=0; i<len; i++){
        setA.add(A[i]);
    }
    
    return setA.size;
}
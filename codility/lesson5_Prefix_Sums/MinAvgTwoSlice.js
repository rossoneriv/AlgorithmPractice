function solution(A) {
    const len = A.length;
    let min = (A[0] + A[1])/2;
    let res = 0;
    let avg2, avg3;
    for(let i=2; i<len; i++){
        avg3 = (A[i-2] + A[i-1] + A[i])/3;
        avg2 = (A[i-1] + A[i])/2;
        if( avg3 < min ) {
            min = avg3;
            res = i-2;
        }
        if( avg2 < min) {
            min = avg2;
            res = i-1;
        }
    }
    
    return res;
}
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const len = A.length;
    let check = [];
    for(let i=0; i<len; i++){
        check[i] = false;
    }
    
    for(let i=0; i<len; i++){
        if(A[i] > 0 && !check[A[i] - 1]){
            check[A[i] - 1] = true;
        }
    }
    
    let res = check.findIndex(item => !item);
    if(res === -1)  return len+1;
    else if(res === 0)  return 1;
    else return res + 1;
}
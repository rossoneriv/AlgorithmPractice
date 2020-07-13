let X = 5;
let A = [1,2,1,4,2,2,5,4];

function solution(X, A) {
    let check = [];
    let cnt = 0;
    
    for(let i=0; i<A.length; i++){
        if(!check[A[i]]){
            check[A[i]] = true;
            cnt++;
        }
        
        if(cnt == X)    return i;
    }
    return -1;
}

console.log(solution(X, A));
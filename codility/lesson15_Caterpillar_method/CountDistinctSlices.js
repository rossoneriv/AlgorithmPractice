function solution(M, A) {
    const len = A.length;
    let chk = new Array(M+1);
    let ret = 0;
    let test = 0;
    let base = 0;

    for(let i=0; i<len; i++){
        if(chk[A[i]] > base){
            base = chk[A[i]];
        }

        chk[A[i]] = i+1;
        // test = ret + i - base + 1;
        // if(test>1000000000) return 1000000000;
        ret += i - base + 1;
        console.log(`${i} : base is ${base} , ret is ${ret} , chk is ${chk}`);
    }

    return ret;
}

console.log(solution(4, [1,2,3,4,1,3,4]));
console.log('');
console.log('--------------------------------------------------------------');
console.log('');
console.log(solution(5, [3,5,4,5,4,2]));
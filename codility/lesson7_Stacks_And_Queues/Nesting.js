function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arrS = Array.from(S);
    const len = arrS.length;
    let stackS = [];
    
    for(let i=0; i<len; i++){
        if(arrS[i] === '(') stackS.push('(');
        else {
            if(stackS[stackS.length - 1] === '(') stackS.pop();
            else return 0;
        }
    }
    return stackS.length === 0 ? 1 : 0;
}
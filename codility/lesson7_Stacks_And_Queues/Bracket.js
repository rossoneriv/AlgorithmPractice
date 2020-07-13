function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arrS = Array.from(S);
    const len = arrS.length;
    let temp = [];
    
    for(let i=0; i<len; i++){
        if(arrS[i] === '(' || arrS[i] === '{' || arrS[i] === '[') temp.push(arrS[i]);
        else if(arrS[i] === ')' && temp[temp.length - 1] === '(') temp.pop();
        else if(arrS[i] === '}' && temp[temp.length - 1] === '{') temp.pop();
        else if(arrS[i] === ']' && temp[temp.length - 1] === '[') temp.pop();
    }
    return temp.length === 0 ? 1 : 0;
}
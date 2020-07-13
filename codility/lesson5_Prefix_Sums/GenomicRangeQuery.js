function solution(S, P, Q) {
    const arrS = Array.from(S);
    const len = P.length;
    
    let res = [];
    for(let i=0; i<len; i++){
        let seg = arrS.slice().splice(P[i], Q[i] - P[i] + 1);
        if(seg.indeOf('A') !== -1) {
            res.push(1);
            continue;
        }
        else if(seg.indexOf('C') !== -1){
            res.push(2);
            continue;
        }
        else if(seg.indexOf('G') !== -1){
            res.push(3);
            continue;
        }
        else res.push(4);
    }
    
    return res;
}
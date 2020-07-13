function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let fishes = [];
    const totalLen = A.length;
    fishes.push({size: A[0], dir: B[0]});
    
    for(let i=1; i<totalLen; i++){
        if(fishes[fishes.length - 1].dir === 0){
            fishes.push({size: A[i], dir: B[i]});
        }
        else{
            if(B[i] === 1){
                fishes.push({size: A[i], dir: B[i]});
            }
            else{
                while(true) {
                    if(fishes.length === 0) {
                        fishes.push({size: A[i], dir: B[i]});
                        break;
                    }
                    else {
                        if(fishes[fishes.length - 1].dir === 0 ) {
                            fishes.push({size: A[i], dir: B[i]});
                            break;
                        }
                        else{
                            if(fishes[fishes.length - 1].size < A[i]) fishes.pop();
                            else break;
                        }
                    }
                }
            }
        }
    }
    
    return fishes.length;
}
function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    const len = H.length;
    let st = [];
    let cnt = 0;
    
    for(let i=0; i<len; i++){
        while(st.length > 0 && st[st.length - 1] > H[i]) {
            st.pop();
        }
        
        if(st.length === 0 || st[st.length - 1] < H[i]) {
            st.push(H[i]);
            cnt++;
        }
    }
    return cnt;
}
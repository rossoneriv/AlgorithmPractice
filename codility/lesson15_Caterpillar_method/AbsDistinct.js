function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let a = new Set();
    A.map(item => {
        a.add(Math.abs(item));
        return item;
    });
    return a.size;
}
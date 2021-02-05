function f(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function fRek(n) {
    return n === 1 ? 1 : n + fRek(n - 1);
}

const res1 = f(3);
const res2 = fRek(3);
console.log(res1);
console.log(res2);
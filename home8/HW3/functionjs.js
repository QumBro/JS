// const arr = [1, 2, 3, 0, 4, 5, 6];
// const arr = [6, 5, 4, 0, 3, 2, 1];
let answer = 1;

const result = arr.reduce(function (sum, current) {
    if (sum < 10) {
        answer++;
        return sum + current;
    }
})

console.log(answer);
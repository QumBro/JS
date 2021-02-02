const arr = [1, 2, 3, 0, 4, 5, 6];
let answer = 0;

const result = arr.reduceRight(function (sum, current) {
    if (current === 0) {
        answer = sum;
    } else {
        return sum + current;
    }
})

console.log(answer);
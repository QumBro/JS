function Nums(...args) {
    this.elem = args.flat();
    this.newArray = function () {
        let arr = [];
        this.elem.forEach(element => {
            if (typeof element === 'object') {
                arr.push(Object.values(element))
            } else {
                arr.push(element);
            }
        })
        return arr.flat();
    }
    this.getSum = function () {
        let sum = 0;
        this.newArray().forEach(elem => {
            if (typeof elem === 'number') {
                sum += elem;
            }
        })
        return sum;
    };
    this.myFilterReverse = function () {
        return this.elem.filter(element => Number.isInteger(element)).reverse();
    };
}


const test = new Nums(1, 2, 3, 3.2, 'a');
console.log(test.myFilterReverse());
console.log(test.getSum());
const objectA = {
    a: 1,
    b: 2,
    c: 3,
    func: function () {
        let sum = 0;
        Object.values(this).forEach(element => {
            if (typeof element === "number" && element > 0) {
                sum += element;
            }
        })
        return console.log(sum);
    }
}

objectA.func();
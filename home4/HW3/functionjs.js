const valObject0 = {
    values: [1, '2', 4, 8, '8', 3, 10, null, false],
};


function getNewArray() {
    if (this.values) {
        let arr = this.values.filter((element) => {
            if ((element > 2 && element < 10) && element % 2 == 0 && typeof element === "number")
                return element;
        });
        console.log(arr);
    } else {
        console.log("Не найдено");
    }

};

valObject0.getNewArray = getNewArray;
valObject0.getNewArray(); 
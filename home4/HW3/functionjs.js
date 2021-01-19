const valObject0 = {
    values: [1, '2', 4, 8, '8', 3, 10, null, false],
};


function getNewArray() {
    if (this.values === undefined) {
        let arr = this.values.filter((element) => {
            if ((element > 2 && element < 10) && element % 2 == 0 && element === "number")
                return element;
        });
        console.log(arr);
    }
    console.log("Ну найдено");
};

const result = getNewArray(); 
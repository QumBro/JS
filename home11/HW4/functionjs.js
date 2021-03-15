let myArray = [1, 2, 3, 4, 5];
let removed = myArray.splice(1, 0, 'a', 'b');
let removed1 = myArray.splice(6, 0, 'c',);
let removed2 = myArray.splice(8, 0, 'e',);
console.log(myArray);
const arr = ['Vasya', 'Petya', 'Alexey']

function removeUser(array, deletIndex) {
    return array.splice(deletIndex, 1);
}


removeUser(arr, 1)
console.log(arr) /// ['Vasya', 'Alexey']
function Animal(name, age, color) {
    if (!(this instanceof Animal)) {
        return new Animal(name, age, color);
    }
    this.name = name;
    this.age = age;
    this.color = color;
}

const rabbit = Animal('Vlad', '20', 'white');
console.log(rabbit);
const lion = new Animal('Rimuru', '22', 'red');
console.log(lion);
const person = {

    getName() {
        console.log('name: ', this.name);
    },

    setName(name) {
        this.name = name;
    },

    getAge() {
        if ('age' in this) {
            console.log('age: ', this.age);
        }
    },

    setAge(age) {
        ageValidation(age);
        function ageValidation(age) {
            if (age > 18) {
                this.age = age;
                console.log('age: ', age);
            } else {
                age = "Validation Error";
                console.log('age: ', age);
            }
        }
    }

};


const person1 = {
    name: "Rimuru",
    age: 10,
    __proto__: person
};


person1.getName();
person1.setName();

person1.getAge();
person1.setAge(person1.age);
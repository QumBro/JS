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
        this.age = this.ageValidation(age);
    },


    ageValidation(age) {
        let age1;
        if (age >= 18) {
            return age;
        } else {
            age1 = "Validation Error";
            return age1;
        }
    }

};


const person1 = {
    name: "Rimuru",
    age: 19,
    __proto__: person
};


person1.getName();
person1.setName();

person1.setAge(person1.age);
person1.getAge();
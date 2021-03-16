class ITCompany {
    create(options) {
        if (options.jobs === 'Программист') {
            return new Programmer(options);
        }
        if (options.jobs === 'Тестер') {
            return new Tester(options);
        }

        throw new Error('Такого типа не существует');
    }

}

class Human {
    constructor(options) {
        this.name = options.name
        this.age = options.age
    }

    getName() {
        return  this.name
    }

    getAge() {
        return this.age
    }

    static getType() {
        return 'Человек';
    }
}

class Programmer extends Human {
    constructor(name, age) {
        super(name, age)
        Programmer.job = 'Programmer'
        // this.job = 'Programmer'
    }
    
    static getJob() {
        return this.job
        // let lol = new Programmer({})
        // return lol.job
    }
}

class Tester extends Human {
    constructor(name, age) {
        super(name, age)
        Tester.job = 'Tester'
        // this.job = 'Tester'
    }
    
    static getJob() {
        return this.job
        // let lol = new Tester({})
        // return lol.job
    }
}

const Company = new ITCompany();

const programmer = Company.create({name: 'Mikky', age: '25', jobs: 'Программист'});
console.log(`Возраст: ${programmer.getName()}`);
console.log(`Возраст: ${programmer.getAge()}`);
console.log(`Профессия: ${Programmer.getJob()}\n`);

const tester = Company.create({name: 'Mikky', age: '25', jobs: 'Тестер'});
console.log(`Возраст: ${tester.getName()}`);
console.log(`Возраст: ${tester.getAge()}`);
console.log(`Профессия: ${Tester.getJob()}\n`);

// ***************************************************************

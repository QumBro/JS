const person = {
    name: 'Vlad'
};


const person1 = {
    age: 1,
};

function setProto(currentObj, protoObj) {
    currentObj.__proto__ = protoObj;
}
console.log(person1.__proto__ === person);
setProto(person1, person);
console.log(person1.__proto__ === person);
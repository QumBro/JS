const juju = {
    a: 1,
    b: 2,
    c: 3,
};

function lol(...arg) {
    return arg;
}

function bindFunc(fun, context, ...arg) {
    return fun.call(this, context, ...arg);
}

const newContex = bindFunc(lol, juju, 1, 2, 3, 4);
console.log(newContex);
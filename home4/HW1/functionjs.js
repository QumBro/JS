const juju = {
    a: 1,
    b: 2,
    c: 3,
};

function lol(...arg) {
    return { array: this, arg: arg };
}

function bindFunc(fun, context, ...arg) {
    return fun.bind(context, ...arg)();
}

const newContex = bindFunc(lol, juju, 1, 2, 3, 4);
console.log(newContex);
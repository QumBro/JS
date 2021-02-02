const inp = document.querySelector('input');
const bt = document.querySelector('button');

const fn = function () {
    console.log(inp.value);
}

bt.addEventListener('click', fn);
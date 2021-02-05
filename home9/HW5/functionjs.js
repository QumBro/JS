const inp = document.getElementById('inp');
const btm = document.getElementById('sum');
let elements = document.querySelectorAll('ul > li');

btm.addEventListener('click', () => {
    let sum = 0;
    let res = '';
    let arr = [];

    elements.forEach(function (i) {
        if (+(i.innerHTML)) {
            sum += +(i.innerHTML);
            arr.push(+(i.innerHTML));
        }
    })

    arr.forEach((elem, index) => {
        let lastindex = arr[arr.length - 1];
        res += (index === lastindex) ? `${elem}` : `${elem} + `;
    })

    inp.value = `${res} = ${sum}`;
});
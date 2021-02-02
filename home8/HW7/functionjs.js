const MyCircle = document.getElementById('IdDota');
const bt = document.querySelector('button');
const inp = document.querySelector('input');
let position = 0;

MyCircle.style.cssText = 'width: 100px; height: 100px;  border-radius: 50%; background: red; margin-top: 50px; ';
bt.style.cssText = 'background: #deb887; border: none; width: 100px; height: 20px; border-radius: 15%; margin-left: 10px;';

bt.addEventListener('click', () => {
    if (+(inp.value)) {
        position += Number(inp.value);
        MyCircle.style.marginLeft = `${position}px`;
        MyCircle.style.transform = 'rotate';
        MyCircle.style.transition = '3s ease-in-out';
    } else {
        inp.value = ' ';
    }
})
let myHolder = document.getElementsByClassName('holder');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');

for (let item of myHolder) {
    item.style.cssText = 'border-radius: 15px 15px 0px 0px ; max-width: 1800px; border: 2px solid black; display: flex; flex-wrap: wrap;';
    item.append(div1, div2, div3, div4, div5);
}

div1.innerText = '1';
div1.classList.add('item');
div1.style.cssText = ` width: 50%; border-radius: 13px 0px 0px 0px ; background-color: #d87093;`;
div2.innerText = '2';
div2.classList.add('item');
div2.style.cssText = `background-color: #004aaa; order: 3; width: 33.33%;`;
div3.innerText = '3';
div3.classList.add('item');
div3.style.cssText = ` background-color: #8200aa; order: 2; width: 33.33%;`;
div4.innerText = '4';
div4.classList.add('item');
div4.style.cssText = ` background-color: #0f7905; order: 4; width: 33.33%;`;
div5.innerText = '5';
div5.classList.add('item');
div5.style.cssText = `width: 50%; background-color: #ffae00; order: 1; border-radius: 0px 13px 0px 0px ;`;

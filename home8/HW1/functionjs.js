const rootP = document.getElementById('pImag');

const creator = (node, attr, attrVal) => {
    const elem = document.createElement(node);
    elem.setAttribute(attr, attrVal);
    return elem;
}

function handler() {
    rootP.remove();
    const NewImg = creator('img', 'src', './img/photo_2021-01-30_15-04-49.jpg');
    NewImg.style.cssText = 'width: 100px; height: 100px; margin-top: 20px';
    document.body.append(NewImg);
    NewImg.addEventListener('mouseenter', () => {
        NewImg.style.cssText = 'transition: 3s; width: 200px; height: 200px;';
    });
    NewImg.onclick = function () {
        NewImg.remove();
    }
}

rootP.addEventListener("click", handler);


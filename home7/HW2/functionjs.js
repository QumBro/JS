const boxSize = 'width: 200px; height: 200px;';
const myDiv = document.getElementById('divID');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');

myDiv.style.cssText = `width: 800px; height: 800px; position: absolute; z-index: 1; left: 80px; top: 80px;`;
div1.style.cssText = `${boxSize} background-color: red; position: absolute;`;
div2.style.cssText = `${boxSize} background-color: blue; position: absolute; z-index: 1; left: 90px; top: 90px;`;
div3.style.cssText = `${boxSize} background-color: green; position: absolute; z-index: 0; left: 180px; top: 180px;`;

myDiv.append(div1, div2, div3);
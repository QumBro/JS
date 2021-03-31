import { DOM } from "./DOM.js";
const div = document.createElement("div");
class Circle extends DOM {
    constructor(dom, width, height, color) {
        super(dom);
        this.width = width;
        this.height = height;
        this.color = color;
    }

    spawnCircle() {
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;
        div.style.backgroundColor = `${this.color}`;
        div.style.borderRadius = "50%";
        this.dom.body.append(div);
    }
    setClickAction(value) {
        div.addEventListener("click", function () {
            div.style.marginLeft = `${value}px`;
            div.style.transition = "margin 2s ease-in-out";
        });
    }
}

const circle = new Circle(document, "200", "200", "red");
console.log(circle);
circle.spawnCircle();
circle.setClickAction(500);
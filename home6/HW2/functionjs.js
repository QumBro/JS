function Calculator() {
    this.prompt1
    this.prompt2
    this.action

    this.read = function () {
        let prompt1, prompt2;
        prompt1 = prompt('Введите первое значение: ');
        prompt2 = prompt('Введите второе значение: ');
        if (!Number(prompt1 && prompt2)) {
            return alert('Неверный символ!');
        }
        this.prompt1 = +prompt1;
        this.prompt2 = +prompt2;
    };

    this.setAction = function () {
        this.action = prompt('Какое действие вы хотите выполнить?');
    };

    this.sum = function () {
        return this.prompt1 + this.prompt2;
    };
    this.min = function () {
        return this.prompt1 - this.prompt2;
    };
    this.div = function () {
        return this.prompt1 / this.prompt2;
    };
    this.mul = function () {
        return this.prompt1 * this.prompt2;
    };

    this.doAction = function () {
        switch (this.action) {
            case '+': return this.sum();
            case '-': return this.min();
            case '/': return this.div();
            case '*': return this.mul();
            default:
                break;
        };
    };
}

const calculator = new Calculator();
calculator.read();
calculator.setAction();
const tres = calculator.doAction();
alert(tres);
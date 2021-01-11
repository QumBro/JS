let stringValidation = (str) => {
    if (typeof str == 'string') {
        if (str.length > 3) {
            console.log(`Ваше cлово: ${str}`);
        } else {
            console.log('Ошибка. Минимальная длина 3 символа');
        }
    } else {
        console.log(`Ошибка. Не тот тип данных ${typeof str}`);
    }
}

stringValidation('Веталька');
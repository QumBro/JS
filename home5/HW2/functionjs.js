const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(lang, datNumber) {
    if (Object.keys(namesOfDays).includes(lang)) {
        if (!namesOfDays[lang][datNumber - 1]) {
            return console.log('Такого значения не существует');
        }
        console.log(namesOfDays[lang][datNumber - 1]);
    } else {
        console.log(`Параметр ${lang} задан не верно`);
    }
}

getNameOfDay('en', 7); // 'Sunday'
getNameOfDay('ru', 3); // 'Среда'

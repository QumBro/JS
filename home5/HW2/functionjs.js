const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(lang, datNumber) {
    for (const key in namesOfDays) {
        if (key === lang) {
            console.log(namesOfDays[key][datNumber - 1]);
        }
    }
}

getNameOfDay('en', 7); // 'Sunday'
getNameOfDay('ru', 3); // 'Среда'
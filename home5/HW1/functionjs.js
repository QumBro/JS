const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

/*const getCity = () => {
    for (const key in citiesAndCountries) {
        console.log(`${key} - это ${citiesAndCountries[key]}`);
    }
}*/

let getCity = () => {
    let array = Object.entries(citiesAndCountries).map(([key, value]) => {
        return (`${key} - это ${value}`);
    })
    return array;
}

const result = getCity();
console.log(result);

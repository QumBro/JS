// При заходе на страницу спросите с помощью инпута день рождения пользователя. Когда он зайдет в следующий раз (после перезагрузки и т.д.) -
// напишите сколько месяцев, дней, часов, минут и секунд осталось до его дня рождения.

let formBirhday = document.getElementsByClassName('formBirhday');

function checkCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let createElem = (node) => {
    const elem = document.createElement(node);
    return elem;
}

function time() {
    let now = new Date();
    let bthDay = checkCookie('Birhday');
    let array = bthDay.split('.');
    let span = createElem('span');
    span.innerText = `До ДР осталось: ${Math.abs(now.getDate() - array[0])} дней и ${Math.abs(now.getMonth() + 1 - array[1])} месяцев`;
    formBirhday[0].append(span);
}

function showForm() {
    if (!checkCookie('formBirhday')) {
        let input = createElem('input');
        formBirhday[0].append(input);

        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                document.cookie = 'Birhday=' + input.value;
                input.remove();
                time();
            }
        })
    } else {
        time();
    }
}
showForm();
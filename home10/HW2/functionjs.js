const promise = fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6');

promise
    .then((response) => {
        if (response.status != 200) {
            console.log(`Ошибка ${response.status}: ${response.statusText}`);
        } else {
            return response.json();
        };
    })
    .then((data) => {
        data.forEach((({ image_url, description, id }) => {
            const img = document.createElement('img');
            const p = document.createElement('p');
            const div = document.createElement('div');
            if (image_url) {
                p.innerHTML = description;
                img.setAttribute('id', id);
                p.setAttribute('style', 'margin-left: 20px');
                img.setAttribute('style', 'height: 400px; width: 120px;');
                img.setAttribute('src', image_url);
                div.setAttribute('style', 'width: 500px; display: flex; flex-direction: row-reverse; align-items: center');
                document.body.prepend(div)
                div.prepend(img)
                div.prepend(p);
            }
            img.addEventListener('click', () => {
                localStorage.setItem('id', id);
            });
        }))
    })



// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6');
// xhr.send();
// xhr.onload = reqListener;


// // localStorage.clear();
// function reqListener() {
//     if (xhr.status != 200) {
//         console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
//     } else {
//         const data = JSON.parse(this.response);
//         data.forEach((({ image_url, description, id }) => {
//             const img = document.createElement('img');
//             const p = document.createElement('p');
//             const div = document.createElement('div');
//             if (image_url) {
//                 p.innerHTML = description;
//                 img.setAttribute('id', id);
//                 p.setAttribute('style', 'margin-left: 20px');
//                 img.setAttribute('style', 'height: 400px; width: 120px;');
//                 img.setAttribute('src', image_url);
//                 div.setAttribute('style', 'width: 500px; display: flex; flex-direction: row-reverse; align-items: center; border: solid 1px; margin-top: 2px');
//                 document.body.prepend(div)
//                 div.prepend(img)
//                 div.prepend(p);
//             }
//             img.addEventListener('click', () => {
//                 localStorage.setItem('id', id);
//             });
//         }))
//     };
// }
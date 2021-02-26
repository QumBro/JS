'use strict'

let apiKey = '81c7fa638746fd07c4855150c00b0176'
let apiURL = 'https://api.themoviedb.org/3/'
let imgURL = 'https://image.tmdb.org/t/p/w500' //(w500, original)
let main = document.getElementById('main')
let mySVG = document.getElementById('mySVG')
let btnFavor = document.getElementById('favor')
let btnHome = document.getElementById('home')
let btnLogo = document.getElementById('logo')
let inputSearch = document.getElementById('inputSearch')
let btnSearch = document.getElementById('btnSearch')

window.location = '?#home';

let divRow = document.createElement('div')
setElem(divRow, {'class': ['row', 'row-cols-1', 'row-cols-md-5', 'g-4']})
main.appendChild(divRow)


function setElem(element, attributes) {
    for (let key in attributes) {
      if (key == 'class') {
          element.classList.add.apply(element.classList, attributes[key]);
      } else {
        element[key] = attributes[key];
      }
    }
}


function chechFavor() {
    let data = JSON.parse(localStorage.getItem('favorMovies')) || [];
    data.forEach(elem => {
        let svgFilter = document.getElementById(`${elem}`)
            svgFilter.classList.add('svg-on')
    })
}


function chechFavor2(id) {
    let svgFilter = document.getElementById(`${id}`)
    svgFilter.classList.add('svg-on')
}


async function getMovies(stringAPI, query) {
    try {
        let json = (await fetch(`${apiURL}${stringAPI}?api_key=${apiKey}&language=ru-RU&query=${query}`)).json()
        return json
    } catch (error) {
        throw error
    }
}



let createCard = (data) => {
    data.forEach(({title, poster_path, id}) => {
        let divCol = document.createElement('div')
        setElem(divCol, {'class': ['col']})

        let divCard = document.createElement('div')
        setElem(divCard, {'class': ['card', 'h-100']})

        let divCardBody = document.createElement('div')
        setElem(divCardBody, {'class': ['card-body', 'flex-row', 'd-flex', 'justify-content-between', 'align-items-center']})

        let h5CardBody = document.createElement('h5')
        setElem(h5CardBody, {'class': ['card-title']})
        h5CardBody.innerText = title

        let svgFovor = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgFovor.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svgFovor.setAttribute('viewBox','0 -10 511.99143 511');
        svgFovor.setAttribute('id', id);
        
        svgFovor.innerHTML = '<path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>'
        
        svgFovor.addEventListener('click', () => {
            if(!svgFovor.classList.contains('svg-on')) {
                svgFovor.classList.add('svg-on')
                let arr = JSON.parse(localStorage.getItem('favorMovies')) || [];
                arr.push(id);
                localStorage.setItem('favorMovies', JSON.stringify(arr));
            } else {

                svgFovor.classList.remove('svg-on')
                let arr = JSON.parse(localStorage.getItem('favorMovies'));
                arr = arr.filter(item => id !== item)
                localStorage.setItem('favorMovies', JSON.stringify(arr));
                
            }
        })
        if (poster_path) {
            let imgPost = document.createElement('img')
            setElem(imgPost, {'class': ['card-img-top'], 'src': imgURL+ poster_path})
            divRow.appendChild(divCol)
            divCol.appendChild(divCard)
            divCard.appendChild(imgPost)
            divCard.appendChild(divCardBody)
            divCardBody.appendChild(h5CardBody)
            divCardBody.appendChild(svgFovor)
        }
    });
    
}




let delCol = () => {
    let col = document.getElementsByClassName('col')
    for (var i = col.length - 1; i >= 0; i--) {
        col[i].parentNode.removeChild(col[i])
    }
}


let addCardHome = () => {
    getMovies('trending/movie/week').then(data => {
        createCard(data.results)
        chechFavor()
    })
}


btnHome.addEventListener('click', () => {
    delCol()
    addCardHome()
})


addCardHome()

btnLogo.addEventListener('click', () => {
    delCol()
    addCardHome()
})


btnFavor.addEventListener('click', () => {
    delCol()

    let obj = JSON.parse(localStorage.getItem('favorMovies'))
    let arrID = Array.from(obj)

    arrID.forEach(id => {
        getMovies(`movie/${id}`,)
            .then(data => {
                createCard([data]);
                chechFavor2(data.id);
            })
    })
    
})


btnSearch.addEventListener('click', () => {
    delCol()
    console.log(inputSearch.value);
    getMovies(`search/movie`, inputSearch.value)
        .then(data => {
            createCard(data.results)
    })
})
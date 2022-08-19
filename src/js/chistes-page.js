import {obtenerChiste} from './http-provider';

const body = document.body;
let id = 1, btnAdd, olList;

const crearChistesHtml = () =>{
    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary">Otro chiste</button>
        <ol class="mt-2 list-group">
        </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
}

const eventos = () => {
    olList = document.querySelector('ol');
    btnAdd = document.querySelector('button');

    btnAdd.addEventListener('click', async() => {
        btnAdd.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnAdd.disabled = false;
    })
}

// Chiste {id, value}
const dibujarChiste = (chiste) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `${id++}.- <b>${chiste.id}</b>: ${chiste.value}`;
    olItem.classList.add('list-group-item')

    olList.append(olItem);
}

export const init = () =>{
    crearChistesHtml();
    eventos()
}

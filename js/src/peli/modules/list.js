import deleteOfList from "./delete.js"
import edit from "./edit.js"

export default class List {
    constructor(){
        // Seleccionar elementos dom a usar
        this.content = document.querySelector("#content")
    }

    peli_template(peli){
        return `
        <article class="film-item" id="peli-${peli.id}">
            <h3 class="title">${peli.title}</h3>
            <p class="descripción">${peli.description}</p>
            <button class="edit" data-id="${peli.id}">Editar</button>
            <button class="delete" data-id="${peli.id}">Borrar</button>
        </article`;
    }
   

    show(pelis){
        // Vaciar Dom
        this.content.innerHTML = ""

        // Recorrer y mostrar todas las peliculas del localstorage

        pelis.forEach(peli => {
            this.content.innerHTML += this.peli_template(peli)
        });


        // Boton de borrado
        deleteOfList()

        // Boton de editar
        edit()

    }
}
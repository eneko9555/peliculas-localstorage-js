import Storage from "./storage.js";
import List from "./list.js";

export default function(){

    // Crear los objetos
    const storage = new Storage()
    const list = new List()
    // Conseguir elementos del dom
    let content = document.querySelector("#content")
    let search_btn = document.querySelector("#search")

    // Evento boton

    search_btn.onclick = (e) => {
        e.preventDefault()

        // Conseguir valor del texto de busqueda
        let wanted = document.querySelector("#search_field").value
        // Conseguir datos de peliculas actualizados
        let pelis_stored = storage.getData()
        // Aplicar filtro
        const new_pelis = pelis_stored.filter((peli) => {
            return peli.title.toLowerCase().includes(wanted.toLowerCase())
        })
        // Mostrar listado
        if(new_pelis.length <= 0){
            content.innerHTML = "<div><h2>No hay coincidencias</h2></div>"

        }else{
            list.show(new_pelis)
        }
        
    }
}
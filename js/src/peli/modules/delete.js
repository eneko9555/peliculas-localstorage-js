import Storage from "./storage.js";
import List from "./list.js";


export default function(){
    // Crear objetos

    const storage = new Storage()
    const list = new List()

    // Datos de las peliculas
    let pelis_stored = storage.getData()
    let pelis_viewed = document.querySelectorAll(".film-item")

    // Recorrer peliculas mostradas

    pelis_viewed.forEach(peli => {
        let delete_btn = peli.querySelector(".delete")

        delete_btn.addEventListener("click", function(){
            const peli_id = this.getAttribute("data-id")

            const new_pelis_stored = pelis_stored.filter((peli) => peli.id !== parseInt(peli_id)) 

            // Actualizar datos localstorage
            storage.save(new_pelis_stored)
            list.show(new_pelis_stored)

        })
            
        
    });

}
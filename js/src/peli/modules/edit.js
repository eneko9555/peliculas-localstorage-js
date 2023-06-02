import Storage from "./storage.js";
import List from "./list.js";

export default function () {
    // Crear objetos
    const storage = new Storage()
    const list = new List()

    // Conseguir datos de peliculas
    let pelis_stored = storage.getData()
    let pelis_viewed = document.querySelectorAll(".film-item")

    // Recorrer peliculas mostradas
    pelis_viewed.forEach((peli) => {

        // Seleccionar boton de editar
        let edit_btn = peli.querySelector(".edit")

        // Asignar evento click
        edit_btn.addEventListener("click", function () {

            // Conseguir id de la peli a editar
            const peli_id = this.getAttribute("data-id")

            // Eliminar botones antiguos
            edit_btn.remove()
            peli.querySelector(".delete").remove()

            // Añadir trozo de html debajo de los botones
            let peli_edit_html = `
                <div class="edit_form">
                    
                    <h3 class ="title">Editar pelicula</h3>
                    <form>
                        <input type="text" class="edited_title" value="${peli.querySelector(".title").innerHTML}" />
                        <textarea class="edited_description">${peli.querySelector(".descripción").innerHTML}</textarea>
                        <input type="submit" class="update" value="Actualizar" />
                    </form>
                
                </div>
                `;

            peli.innerHTML += peli_edit_html
            // Seleccionar el boton de actualizar
            const update_btn = peli.querySelector(".update")
            // Aplicar evento click
            update_btn.addEventListener("click", function (e) {
                e.preventDefault();
                // Buscar indice de la pelicula a actualizar
                let index = pelis_stored.findIndex((peli) => peli.id === parseInt(peli_id))

                // Guardar objeto dentro de ese indice
                pelis_stored[index] = {
                    id: parseInt(peli_id),
                    title: peli.querySelector(".edited_title").value,
                    description:peli.querySelector(".edited_description").value
                }

                // Actualizar localstorage
                storage.save(pelis_stored)
                // Volver a mostrar el listado
                list.show(pelis_stored)
            })

        })


    })


}
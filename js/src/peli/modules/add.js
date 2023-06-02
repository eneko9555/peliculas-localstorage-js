import Storage from "./storage.js";
import List from "./list.js"

export default class Add {
    constructor() {
        // Crear objetos
        this.storage = new Storage()
        this.list = new List()

        // Conseguir elementos DOM
        this.title_field = document.querySelector("#title");
        this.description_field = document.querySelector("#description");
        this.save_btn = document.querySelector("#save");
    }

    film_save() {
        this.save_btn.onclick = (e) => {
            e.preventDefault();

            // Conseguir datos actualizados
           let pelis =  this.storage.getData()
           let lastId = this.storage.getLastId()

            // Datos a guardar
            let title = this.title_field.value;
            let description = this.description_field.value;
            console.log(title, description)


            //Pequeña validacion
            if (title == "" || description == "") {
                alert("introduce bien los datos")
            } else {

                // Crear objeto para guardar
                let peli = {
                    id: lastId++,
                    title,
                    description
                }

                // Añadir al array de objetos
                pelis.push(peli)

                // Guardar objeto Localstorage
                this.storage.save(pelis)

                // Actualizar el listado

                this.list.show(pelis)
            }

        }
    }
}
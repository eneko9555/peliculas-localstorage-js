import Add from "./modules/add.js"
import List from "./modules/list.js"
import Storage from "./modules/storage.js"
import Search from "./modules/search.js"

export default class App{

    constructor(){
        // Inicializar propiedades
        this.add = new Add()
        this.list = new List()
        this.storage = new Storage()
    }

    load(){
        // Añadir pelicula
        this.add.film_save()

        // Conseguir array de peliculas
        const pelis = this.storage.getData()

        // Listar peliculas
        this.list.show(pelis)
        // Buscar peliculas
        Search()

        console.log("app started");
    }
}
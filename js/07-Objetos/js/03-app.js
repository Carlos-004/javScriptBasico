//Agregar o eliminar propiedades de un objecto

//Crear objecto en JavaScript
const producto = {
    nombre:"Monitor",
    precio:3000,
    id:0,
    disponible:true,
}

//Agregar propiedades
producto.img = "img.jpg";

//Eliminar propiedades
delete producto.id;

console.log(producto)
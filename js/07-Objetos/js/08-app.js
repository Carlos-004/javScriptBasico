//Congelar un objecto para no poderlo modifical

"use strict";
const producto = {
    nombre:"Monitor",
    precio:3000,
    id:0,
    disponible:true,
}

console.log(Object.freeze(producto))

//Agregar propiedades
producto.img = "img.jpg";

//Eliminar propiedades
delete producto.id;

console.log(producto);


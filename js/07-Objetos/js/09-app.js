//Sellar un objecto

"use strict";
const producto = {
    nombre:"Monitor",
    precio:3000,
    id:0,
    disponible:true,
}

console.log(Object.seal(producto));

//Agregar propiedades
producto.img = "img.jpg";

//Eliminar propiedades
delete producto.id;

console.log(producto);


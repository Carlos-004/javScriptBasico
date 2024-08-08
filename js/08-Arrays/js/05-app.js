//Añadir nuevos elementos al fin o inicio de un array

const carrito = [];



const producto = {
    nombre:"tv",
    precio:2000,
    id:0
}
carrito.unshift(producto)

const newProducto = {
    nombre:"tv",
    precio:2000,
    id:0
}
carrito.push(newProducto)

console.log(carrito)
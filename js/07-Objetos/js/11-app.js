//Funcion en objectos 

const producto = {
    nombre:"Monitor",
    precio:3000,
    id:0,
    disponible:true,
    detallesDelProducto:function(){
        console.log(`El ${this.nombre} tienen un precio de $${this.precio}`)
    }
}
producto.detallesDelProducto()
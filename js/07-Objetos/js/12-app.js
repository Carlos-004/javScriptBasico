//Object contructor 


function Producto(nombre,precio,id,disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
    this.disponible = disponible;
}

const newProducto = new Producto("PC gamer",50000,0,true);
console.log(newProducto)
//Metodo de los string Replace, Slice, Substring

const producto = "Monitor de 24 pulgadas";

//El metodo replace() funciona para remplazar una cadena de texto por otra o si no la regresa igual
const newProducto = "Monitor curbo";
console.log(producto.replace("Monitor",newProducto));//Monitor curbo de 24 pulgadas

//El metodo slice funciona para cortar segun su indice 
console.log(producto.slice(0,10));//Monitor de
console.log(producto.slice(0,8));//Monitor 
console.log(producto.slice(2,1));


//El metodo Substring() funciona para cortar tambien pero intercambia los valores si su indice inicial es mayor que el segundo
console.log(producto.substring(0,10))//Monitor de
console.log(producto.substring(0,8));//Monitor 
console.log(producto.substring(2,1));


console.log(producto.charAt(0))
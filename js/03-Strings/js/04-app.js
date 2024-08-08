//Cortar los espacios en blanco de los string

const producto = "      Monitor de 24 pulgadas       ";
console.log(producto)

//El metodo trimStart() corta los espacios en blanco al inicio del array
console.log(producto.trimStart());//Monitor de 24 pulgadas       ;


//El metodo trimEnd() corta los espacios en blanco al final del array
console.log(producto.trimEnd());//      Monitor de 24 pulgadas

//El metodo trim() corta los espacios en blanco de ambos lado
console.log(producto.trim());//Monitor de 24 pulgadas
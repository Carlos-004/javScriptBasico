//Metodos de los string

const producto = "Monitor de 24 pulgadas";


//La propiedad "length" mide la longitud de los string y los array de cuantos espacios y letras tiene
console.log(producto.length);//22


//El includes() método determina si un array incluye un determinado valor entre sus entradas, devolviendo verdadero o falso corresponda.
console.log(producto.includes("24"));//true

//El indexOf()método del array devuelve el primer índice en el que a dado elemento se puede encontrar en el array, o -1 si no está presente.
console.log(producto.indexOf("de"));//8
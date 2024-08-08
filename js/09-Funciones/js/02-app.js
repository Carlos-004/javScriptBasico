//La deferencia entre funciones expression y declaracion

//Declaracion de funciones
function suma(a,b){
    let resultado = a + b;
    return resultado
}
console.log(suma(10,11))

//Expression de funciones
const potencia = function(a,b){
    let resultado = Math.pow(a,b);
    return resultado;
}
console.log(potencia(3,3))
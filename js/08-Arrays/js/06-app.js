//Crea un nuevo array con el spread operator


const numeros = [10,20,30,40,50];

const deTodo = [10,"hola",{nombre:"Carlos"},null,undefined,[10,20,30,40,50],Boolean,true]

console.log([...deTodo,...numeros])
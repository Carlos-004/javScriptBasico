//Destructurin de array 

const deTodo = [10,"hola",{nombre:"Carlos"},null,undefined,[10,20,30,40,50],Boolean,true]

const [, , ,y, ,] = deTodo;
console.log(y)
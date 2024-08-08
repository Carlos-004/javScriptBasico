//Destructuring de objecto
const producto = {
    nombre:"Monitor",
    precio:3000,
    id:0,
    disponible:true,
}

const {nombre,precio} = producto;


console.log(`El ${nombre} tiene un valor de $${precio}`);
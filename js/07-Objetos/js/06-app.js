//Destructuring de Objecto Anidados


const producto = {
    nombre:"Monitor",
    precio:3000,
    id:0,
    disponible:true,
    informacion:{
        medidas:{
            peso:"1kg",
            medida:"1m"
        },
        fabricacion:{
            pais:"RD"
        }
    }
}

const {nombre, informacion,informacion:{fabricacion:{pais}}} = producto
console.log(informacion);
console.log(pais);
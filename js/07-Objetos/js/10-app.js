//copiar dos objectos

const producto = {
    nombre:"Monitor",
    precio:3000,
    id:0,
    disponible:true,
}

const informacion = {
    medidas:{
        peso:"1kg",
        medida:"1m"
    },
    fabricacion:{
        pais:"RD"
    }
}


console.log({...producto,...informacion})
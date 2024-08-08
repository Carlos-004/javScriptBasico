//Operador && para validar si ambas se cumplen


const user = false;
const puedePagar = false;


if (user && puedePagar) {
    console.log("Puedes pagar")
}else if (!puedePagar && !user) {
    console.log("No puedes comprar")
}else if (!user) {
    console.log("Inicia seccion o crea una cuenta");
}else if (!puedePagar) {
    console.log("No tienes dinero para pagar")
}
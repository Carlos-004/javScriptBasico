//Operador "or" o "||"

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalApagar = 600;


if (efectivo >= totalApagar || credito >= totalApagar || disponible >= totalApagar) {
    console.log("Puedes pagar")
}else{
    console.log("No puedes pagar")
}
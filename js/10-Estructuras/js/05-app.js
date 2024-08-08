// Switch para evaluar multiples condiciones

const metodoDePago = "Efectivo";


switch (metodoDePago) {
    case "Cheque":
        console.log(`Puedes pagar con ${metodoDePago}`)
        break;
    case "Tarjeta":
        console.log(`Puedes pagar con ${metodoDePago}`)
        break;
    case "Efectivo":
        console.log(`Puedes pagar con ${metodoDePago}`)
        break;

    default:
        console.log("No tienes ningun metodo de pago")
        break;
}
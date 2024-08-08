//Evento sobre input

const busqueda = document.querySelector(".busqueda");
busqueda.addEventListener("keydown",(e) =>{
    console.log("Escribiendo")
})


busqueda.addEventListener("keyup",(e) =>{
    console.log("estoy aqui")
})

busqueda.addEventListener("blur",(e) =>{
    console.log("Gooooollll!")
})


busqueda.addEventListener("input",(e) =>{
    console.log(e.target.value)
})
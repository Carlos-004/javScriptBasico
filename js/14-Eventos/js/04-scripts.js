//Eventos Submit a un formulario

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",(e) =>{
    console.log(e.preventDefault());
})
const boton = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer")

boton.addEventListener("click", () =>{
    if (footer.classList.contains("activo")) {
        footer.classList.remove("activo");
        boton.innerHTML = "Idioma y Moneda"
        boton.style.color = "#000";
    }else if(!footer.classList.contains("activo")){
        footer.classList.add("activo");
        boton.innerHTML = 'CLOSE X';
        boton.style.color = "#FF0000";
    }
})
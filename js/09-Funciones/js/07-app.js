//Como se comunican las funciones 

iniciarApp()
function iniciarApp(){
    console.log("Iniciando App...");

    segundaFuncion();
}


function segundaFuncion(){
    console.log("Desde la segunda funcion");
    usuarioAutenticado("Carlos")
}


function usuarioAutenticado(nombre){
    console.log("Autenticadon usuario.. espere...");
    console.log(`El usuario ${nombre} autenticado existosamente,`)
}
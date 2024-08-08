const userName = prompt("Cual es tu Nombre?");
const contenido = document.querySelector(".contenido");
contenido.innerHTML = `Hola ${userName}`;

const boton = document.querySelector(".boton");
boton.addEventListener("click",() =>{
    const inputPrecio = document.querySelector("#precio");
    const inputPorciento = document.querySelector("#porciento");
    const total = document.querySelector(".total");

    const precio = inputPrecio.value ;
    const porciento = inputPorciento.value;
    const resultado = Math.floor(precio * (100 - porciento) /100);
    total.innerHTML = `El porciento es %${resultado}`;


    if (precio === "" || porciento === "") {
        return total.innerHTML = "Por favor llene ambos campos";
    }

    if (porciento > 100) {
        return total.innerHTML = "No te puedo dar ese porciento de descuento";
    }
})


const productosElectronicos = [
    { id: 1, nombre: "Smartphone" },
    { id: 2, nombre: "Laptop" },
    { id: 3, nombre: "Tablet" },
    { id: 4, nombre: "Smartwatch" },
    { id: 5, nombre: "Auriculares inalámbricos" },
    { id: 6, nombre: "Monitor" },
    { id: 7, nombre: "Teclado mecánico" },
    { id: 8, nombre: "Mouse gaming" },
    { id: 9, nombre: "Cámara digital" },
    { id: 10, nombre: "Altavoces Bluetooth" },
    { id: 11, nombre: "Router WiFi" },
    { id: 12, nombre: "Disco duro externo" },
    { id: 13, nombre: "Consola de videojuegos" },
    { id: 14, nombre: "Televisor 4K" },
    { id: 15, nombre: "Impresora láser" },
    { id: 16, nombre: "Proyector" },
    { id: 17, nombre: "Reproductor de Blu-ray" },
    { id: 18, nombre: "Sistema de sonido" },
    { id: 19, nombre: "Cámara de seguridad" },
    { id: 20, nombre: "Smart Home Hub" }
];
const buscarProducto = document.querySelector("#buscar");
const container = document.querySelector(".container");


function productos(productoFiltrado){
    container.innerHTML = " ";
    productoFiltrado.forEach(dataProduct =>{
        const ulContainer = document.createElement("ul");
        const liListProduct = document.createElement("li");
        liListProduct.innerText = `${dataProduct.nombre}`
        liListProduct.style.color = "#fff";
        ulContainer.append(liListProduct);
        container.append(ulContainer);
    });
}

function buscandoProducto(){
    buscarProducto.addEventListener("input",() =>{
        const nombres = buscarProducto.value.toLowerCase();
        const productoFiltrado = productosElectronicos.filter(filtracion =>
            filtracion.nombre.toLowerCase().includes(nombres)
        )
        productos(productoFiltrado)
    })
}

buscandoProducto()
productos(productosElectronicos)
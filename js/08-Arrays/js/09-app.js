//forEach

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


productosElectronicos.forEach(data =>{
    console.log(data.nombre)
})
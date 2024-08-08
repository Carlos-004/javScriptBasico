//Arrow funcion


const reproductor ={
    reproducir:id =>{
        console.log(`Reproduciendo cancion con el ID ${id}`)
    },
    pausarCancion:Id =>{
        console.log(`Pausar cancion con el ID ${Id}`)
    },
    crearPlayList:nombre =>{
        console.log(`Crear playlist de ${nombre}`)
    },
    reproducirPlayList:nombre =>{
        console.log(`Reproducir playlist ${nombre}`)
    },
    borrarPlayList:name =>{
        console.log(`Borrar playlist de ${name}`)
    }
}

reproductor.reproducir(30);
reproductor.pausarCancion(20);
reproductor.crearPlayList("Rap");
reproductor.reproducirPlayList("Trap");
reproductor.borrarPlayList("Hiphop")
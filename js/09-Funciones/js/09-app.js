//Añadir funicones en un Objecto

const producto = {
    nombre:"Monitor",
    precio:3000,
    id:0,
    disponible:true,
    detallesDelProducto:function(){
        console.log(`El ${this.nombre} tienen un precio de $${this.precio}`)
    }
}
producto.detallesDelProducto()



const reproductor ={
    reproducir:function(id){
        console.log(`Reproduciendo cancion con el ID ${id}`)
    },
    pausarCancion:function(Id){
        console.log(`Pausar cancion con el ID ${Id}`)
    },
    crearPlayList:function(nombre){
        console.log(`Crear playlist de ${nombre}`)
    },
    reproducirPlayList:function(nombre){
        console.log(`Reproducir playlist ${nombre}`)
    },
    borrarPlayList:function(name){
        console.log(`Borrar playlist de ${name}`)
    }
}

reproductor.reproducir(30);
reproductor.pausarCancion(20);
reproductor.crearPlayList("Rap");
reproductor.reproducirPlayList("Trap");
reproductor.borrarPlayList("Hiphop")
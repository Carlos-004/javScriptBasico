//Metodo de los string Repeat y Split

const producto = "Monitor de 24 pulgadas";
const estado = "Nuevo!! ";

//El metodo repeat() repite segun las veces que ledigas
console.log(`El ${producto} ${estado.repeat(3)}`);//El Monitor de 24 pulgadas Nuevo!! Nuevo!! Nuevo!! 

//El metodo split() divide segun donde le informes 
console.log(producto.split(" "));//[ 'Monitor', 'de', '24', 'pulgadas' ]

const twet = "CarlosDaniel#DeLeonGuzmán";
console.log(twet.split("#"));//[ 'CarlosDaniel', 'DeLeonGuzmán' ]
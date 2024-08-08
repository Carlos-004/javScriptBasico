//for loop

const numero = [10,20,30,40,50,60];


for (let i = 0; i < numero.length; i++) {
    const element = numero[i];
    console.log(element)
}


for (const i of numero) {
    console.log(i)
}
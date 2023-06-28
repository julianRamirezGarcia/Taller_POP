let objeto = {162544: {nombres: "Pepe", apellidos: "Perez", edad: 40}, 4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31}, 786353: {nombres: "Raul", apellidos: "Castro", edad: 80}};
let valor = "";


for (const llave in objeto) {
    for (const llave2 in objeto[llave]) {
        valor = objeto[llave][llave2];
        console.log(llave2,valor);
    }
}


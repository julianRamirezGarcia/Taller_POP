let objeto = { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552:
"inhabilitado", 438276: "habilitado" };
let element = "";
let contador = 0;

for (key in objeto) {
    let element = objeto[key];
    if (element === "habilitado") {
        contador++
    }
}
console.log(objeto);
console.log("Hay",contador,"personas habilitadas");
let objecto = {dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50};
let element = "";

for (key in objecto) {
    let element = objecto[key]
    if (element % 2 === 0) {
        console.log(element, "es par")
    }
}
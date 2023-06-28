let producto = {Papa: 5000, Arroz: 4000, Lentejas: 2500, Aceite: 6000};

for ( key in producto) {
    console.log("Producto", key);
    console.log("Precio", producto[key])
}
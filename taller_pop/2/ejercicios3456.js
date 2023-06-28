class cuentaBancaria{
    constructor (titular){
        this.saldo = 0;
        this.titular = titular;
    }
    depositar(cantidad){
        this.saldo += cantidad;
    }
    retirar(cantidad){
        if (cantidad <= this.saldo){
            this.saldo -= cantidad;
            console.log("retiro de dinero realizado con exito"); 
        }else{
            console.log("no tiene saldo para realizar el retiro de dinero");
        } 
    }
}

const miCuenta = new cuentaBancaria("Samuel Calderon");

miCuenta.depositar(100);
console.log(miCuenta.titular);
console.log(miCuenta.saldo);

miCuenta.retirar(50);
console.log(miCuenta.titular);
console.log(miCuenta.saldo);
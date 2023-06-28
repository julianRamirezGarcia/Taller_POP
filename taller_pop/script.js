/*class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }

  ladrar() {
    console.log(`¡Woof! ${this.nombre}`);
  }
}*/

class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }

  ladrar() {
    console.log(`¡Woof! ${this.nombre}`);
  }
}

/*let miPerro = new Perro("Rocky");
miPerro.ladrar(); // Salida: ¡Woof! Rocky

class CuentaBancaria {
  constructor(titular) {
    this.saldo = 0;
    this.titular = titular;
  }

  depositar(cantidad) {
    this.saldo += cantidad;
  }
}
let miCuenta = new CuentaBancaria("Juan");
console.log(miCuenta.saldo); // Salida: 0

miCuenta.depositar(100);
console.log(miCuenta.saldo); // Salida: 100

miCuenta.depositar(50);
console.log(miCuenta.saldo); // Salida: 150*/

/*class CuentaBancaria {
  constructor(titular) {
    this.saldo = 0;
    this.titular = titular;
  }

  depositar(cantidad) {
    this.saldo += cantidad;
  }
}

let miCuenta = new CuentaBancaria("Alice");
console.log(miCuenta.saldo); // Salida: 0

miCuenta.depositar(100);
console.log(miCuenta.saldo); // Salida: 100*/

class CuentaBancaria {
  constructor(titular) {
    this.saldo = 0;
    this.titular = titular;
  }

  depositar(cantidad) {
    this.saldo += cantidad;
  }

  retirar(cantidad) {
    if (cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log(
        `Se retiraron ${cantidad} unidades. Saldo restante: ${this.saldo}`
      );
    } else {
      console.log("No hay suficiente saldo en la cuenta.");
    }
  }
}

let miCuenta = new CuentaBancaria("Alice");
console.log(miCuenta.saldo); // Salida: 0

miCuenta.depositar(100);
console.log(miCuenta.saldo); // Salida: 100

miCuenta.retirar(50);
console.log(miCuenta.saldo); // Salida: 50

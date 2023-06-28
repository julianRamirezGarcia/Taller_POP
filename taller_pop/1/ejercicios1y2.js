class perro{
    constructor(nombre){
        this.nombre = nombre;
    }

    ladrar(){
        console.log(" ¡Woof! " + this.nombre);
    }
}

const miPerro = new miPerro("Iryna");
miPerro.ladrar();
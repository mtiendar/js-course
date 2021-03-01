// *Para hacer referencia a un mismo objeto es mejor usar la palabra reservada "this"
const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad} `);
    }
}

// fher.imprimir();

// *Función para crear instancias (Por iniciar con letra mayuscula)
function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

// *Para generar nuevas instancias usamos la palabra "new"
const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);
// console.log(maria);

maria.imprimir();
melissa.imprimir();
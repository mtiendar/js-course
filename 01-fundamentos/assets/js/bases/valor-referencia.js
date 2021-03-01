let a = 10;
let b = a;
a = 30;

// Estamos pasando por valor 
// Todos los primitivos se pasan por valor 
console.log({a, b});

// Pasando por referencia
// Todos los objetos son pasados por referencia
let juan = {nombre: 'Juan'};
// Operador spred "..."
let ana  = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});
// ============================================================================================================= //

const cambiaNombre = ({...persona}) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony  = cambiaNombre(peter);

console.log({peter, tony});

// ============================================================================================================ //
// Arreglos 

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

// El spread "..." tarda un poco menos de tiempo
console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});
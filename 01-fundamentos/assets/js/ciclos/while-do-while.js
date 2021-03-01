const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while (i < carros.length) {
//    console.log(carros[i]);
//    // * Formas de representar un incremento
//    // i = i + 1;
//    // i += 1;
//    i++;
// }

/*
* Cosas que son consideradas falso:
* 1. undefined
* 2. null
* 3. false
*/

console.warn('While');

while (carros[i]) {
   if (i === 1) {
      // break;
      i++;
      continue;
   }
   console.log(carros[i]);
   i++;
}

console.warn('Do while');

let j = 0;

do {
   console.log(carros[j]);
   j++;
} while (carros[j]);

const pruebas = () =>{
   console.log('Esto es una impresión en consola.');
}
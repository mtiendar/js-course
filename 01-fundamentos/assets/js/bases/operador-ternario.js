/**
 * Dias de semana abrimos a las 11,
 * Pero los fines de semana abrimos a las 9
 */

// *Entra a un sitio web, para consultar si está abierto hoy ...

const dia = 1;
const horaActual = 11;

let horaApertura;
let mensaje; // *Está abierto, Está cerrado, hoy abrimos a las S/N

// // if (dia === 0 || dia === 6) {
// // * Forma optima de realizar el ejercicio.
// if([0,6].includes(dia)){
//    console.log('Fin de semana');
//    horaApertura = 9;
// }else{
//    console.log('Dia de semana');
//    horaApertura = 11;
// }

// * CONDICIONAL TERNARIO
horaApertura = ([0,6].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura) {
//    mensaje = 'Está abierto';
// }else{
//    // * El acento fuerte (backtick) se pone con las teclas: "altGr + }" dos veces
//    // * Con código ascci es: "alt + 96"
//    // * Resultado = ``
//    // ! Forma de concatenar cadenas de texto con: ${***}
//    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? `Esta abierto` : `Esta cerrado, hoy abrimos a las ${horaApertura}`

console.log({horaApertura, mensaje});
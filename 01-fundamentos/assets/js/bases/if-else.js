let a = 5;

if (a >= 10) { // Undefined, null, una asignación
    console.log('A es mayor a 10');
}else{
    console.log('A es menor a 10');
}

// La palabra "new" ayuda a crear una nueva instancia
const hoy = new Date();
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes...

console.log({dia});

if(dia === 0){
    console.log('Domingo');
}else if(dia === 1){
//     if(dia === 1){
//         console.log('Lunes');
//     }else{
//         console.log('No es lunes ni domingo');
//     }
    console.log('Lunes');
}else if(dia === 2){
    console.log('Martes');
}else{
    console.log('No es lunes, martes o domingo');
}

// Sin usar If Else, o Switch, unicamente objetos (Llaves)
// Imprimir el dia de la semana
dia = 6;

// Tarea hecha con arreglo (Llaves cuadradas "[]")
const semana = [
    'Domingo', 
    'Lunes', 
    'Martes', 
    'Miercoles', 
    'Jueves', 
    'Viernes', 
    'Sabado'
];


function prueba(rags){
    const otros = (another) =>{
        console.log('Holi');
    }
}
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

// *Ciclo "for" de uso tradicional
console.warn('For tradicional');

// *Partes del ciclo for
// * 1. Inicializador
// * 2. Condición
// * 3. Incrementador

for(let i = 0; i < heroes.length; i++){
   console.log(heroes[i]);
}

// * For in
console.warn('For in');

// *Pondremos el objeto después del "in" que nos permite iterar
// *Permite manejar la condición y salir cuando ya no haya más elementos dentro del objeto "heroes"
for(let i in heroes){
   console.log(heroes[i]);
}

// *Ciclo For of
console.warn('For of');

// *La variable que va después del let va en el modo singular de nuestro iterador
// *heroe == heroes
for(let heroe of heroes){
   console.log(heroe);
}

//* Primer letra de una clase debería de ir con mayusculas

class Persona {
	// * Esto son propiedades de un constructor, no incicialización de variables 

	// *Esto es una propiedad estática
	static _conteo = 0;
	static get conteo () {
		return Persona._conteo + ' instancias';
	}

	static mensaje() {
		console.log(this.nombre);
		console.log('Hola a todos, soy un método estático');
	}

	nombre = '';
	codigo = '';
	frase  = '';
	comida = '';

	constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
		// * Para usar una propiedad, debemos usar la palabra reservada "this"

		this.nombre = nombre;
		this.codigo = codigo;
		this.frase  = frase;

		Persona._conteo++;
	}
	
	// *Sets(Para establecer un valor) y gets (Para recuperar un valor)
	// *Por lo general los sets, solo reciben un método
	set setComidaFavorita(comida) {
		this.comida = comida.toUpperCase();
	}	

	get getComidaFavorita() {
		return `La comida favorita de ${this.nombre} es ${this.comida}`;
	}

	// *Constructores
	quienSoy() {
		console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
	}

	miFrase() {
		console.log(`${this.codigo} dice: ${this.frase}`);
	}
}

const spiderman = new Persona('Peter parker', 'Spider', 'Soy spiderman');
const ironman   = new Persona('Tony', 'Ironman', 'Yo Soy Ironman');

// console.log(ironman); 

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'Pene al burro';
// spiderman.comida = 'Duende Verde';

// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);

// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);

Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';
console.log(Persona);
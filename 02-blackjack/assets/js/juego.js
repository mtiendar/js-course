// * ''' Patron de modulo '''

// *Función anónima autoinvocada

// *Podemos usar el 'use strict' para mejores practicas 
// *con el modelo "Patron de modulo"
const miModulo = (() => {
   'use strict'
   let deck         = [];
   const tipos      = ['C', 'D', 'H', 'S'],
         especiales = ['A', 'J', 'Q', 'K'];

   let puntosJugadores = [];

   // *Referencias del HTML
   const btnPedir   = document.querySelector("#btnPedir"),
         btnDetener = document.querySelector("#btnDetener"),
         btnNuevo   = document.querySelector("#btnNuevo");

   const divCartasJugadores = document.querySelectorAll('.divCartas'),
         puntosHTML         = document.querySelectorAll("small");

   // *Esta función inicializa el juego
   const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck();
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
         puntosJugadores.push(0);
      }

      puntosHTML.forEach(elem => elem.innerText = 0);
      divCartasJugadores.forEach(elem => elem.innerHTML = '');

      // *Habilitar de nuevo los botones "Detener y pedir cartas"
      btnPedir.disabled = false;
      btnDetener.disabled = false;
   }

   // *Esta función crea un nuevo deck (Una nueva baraja)
   const crearDeck = () => {
   deck = [];
      for (let i = 2; i <= 10; i++) {
         for (let tipo of tipos) {
            deck.push(i + tipo);
         }
      }

      for (let tipo of tipos) {
         for (let esp of especiales) {
            deck.push(esp + tipo);
         }
      }
      // *Descargar la segunda opción que aparece en las opciones
      // *de production underscore.js
      return _.shuffle(deck);
   }

   // *Esta función me permite crear una nueva carta 
   const pedirCarta = () => {
      if (deck.length === 0) {
         throw 'No hay más cartas en el deck';
      }
      return deck.pop();
   }

   // *Función para saber cual es valor de una carta (Resumida)
   const valorCarta = (carta) => {
      const valor = carta.substring(0, carta.length - 1);
      return (isNaN(valor)) ? 
            (valor === 'A') ? 11 : 10
            : valor * 1;
   }

   // Turno: 0 = primer jugador y el ultimo será la computadora
   const acumularPuntos = (carta, turno) => {
      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
      puntosHTML[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno];
   }

   // *Crear carta
   const crearCarta = (carta, turno) => {
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${carta}.png`;
      imgCarta.classList.add('carta');
      divCartasJugadores[0].append(imgCarta)
   }

   // *Funcion para determinar un ganador
   const determinarGanador = () => {
      const [puntosMinimos, puntosComputadora] = puntosJugadores;
      setTimeout(() => {
         if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana');
         } else if (puntosMinimos > 21) {
            alert('La computadora gana');
         } else if (puntosComputadora > 21) {
            alert('El jugador 1 gana');
         } else {
            alert('La computadora gana');
         }
      }, 100);
   }

   // *Turno de la computadora
   const turnoComputadora = (puntosMinimos) => {
      let puntosComputadora = 0;
      do {
         const carta = pedirCarta();
         puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
         crearCarta(carta, puntosJugadores.length - 1);
      } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
      determinarGanador();
   }

   // *Eventos (Pedir una carta)
   btnPedir.addEventListener('click', () => {
      const carta = pedirCarta();
      const puntosJugador =  acumularPuntos(carta, 0);

      crearCarta(carta, 0);

      // *Controlar puntos
      if (puntosJugador > 21) {
         console.warn('Has Perdido :(');
         btnPedir.disabled = true;
         btnDetener.disabled = true;
         turnoComputadora(puntosJugador);
      } else if (puntosJugador === 21) {
         console.warn('¡21! Ganaste UwU');
         btnPedir.disabled = true;
         btnDetener.disabled = true;
         turnoComputadora(puntosJugador);
      }
   });

   // *Boton para detener las funciones...
   btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      // *Llamo al turno de la computadora
      turnoComputadora(puntosJugadores[0]);
   });

   // *Boton para Juego Nuevo
   btnNuevo.addEventListener('click', () => {
      inicializarJuego(); 
   });

   // *Lo que este dentro del return será público y se pude 
   // *acceder desde el modulo
   return {
      nuevoJuego: inicializarJuego 
   };
})();
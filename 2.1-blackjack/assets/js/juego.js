/**
 * Patron de modulo:
 * 
 * Es una función anónima autoinvocada, la cual nos funciona para
 * darle mayor seguridad a nuestro código. 
 */

(() => {
    'use strict'

    /**
     * 2C = Two of Clubs == 2 de treboles
     * 2D = Two of Diamonds == 2 de Diamantes
     * 2H = Two of Hearts == 2 de Corazones
     * 2S = Two of Spades == 2 de Espadas
     */

    let deck         = []; // <- Arreglo de cartas vacio...
    const tipos      = ['C', 'D', 'H', 'S'], // <- Representa el tipo de cartas que tenemos
          especiales = ['A', 'J', 'Q', 'K']; // <- Representa las cartas especiales

    let puntosJugadores = []; 

    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo');

    const divCartasJugador     = document.querySelector("#jugador-cartas"),
          divCartasComputadora = document.querySelector("#computadora-cartas"),
          puntosHTML           = document.querySelectorAll('small');

    // Esta función incializa el juego.
    const inicializarJuego = (numJugadores = 2  ) => {
        deck = crearDeck();
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
        // console.log({puntosJugador});
    }

    // *** CREAR UNA NUEVA BARAJA ***
    const crearDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) { // <- Crea una nueva baraja de cartas
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) { // <- Nos crea los As de cartas especiales
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }

        // console.log(deck); <- Nos manda un as de cartas en orden...
        // console.log(deck);
        return _.shuffle(deck);
    }

    // *** Función que permite extraer una carta ***
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        // console.log(deck);
        // console.log(carta); // Carta debe ser de la baraja

        return deck.pop();
    }

    // pedirCarta();

    // *** EXTRAER VALOR DE UNA CARTA ***
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);

        return (isNaN(valor)) ? // <- Función resumida
            (valor === 'A') ? 11 : 10
            : valor * 1;

        /**
         * El codigo comentado de la parte de abajo, es resumido con una función
         * ternaria arriba
         */

        // let puntos = 0;
        // if (isNaN(valor)) {
        //     puntos = (valor === 'A') ? 11 : 10; // <- Valores especiales tienen el valor de 10
        // } else {
        //     console.log('Es un número');
        //     puntos = valor * 1; // <- Convertir un string a número
        // }
        // console.log(puntos);
    }

    const acumularPuntos = () => {
        
    }

    // *** Turno de la computadora ***
    const turnoComputadora = (puntosMinimos) => {

        do {
            const carta = pedirCarta();
            
            puntosComputadora = puntosComputadora + valorCarta(carta);
            puntosHTML[1].innerText = puntosComputadora;
        
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`; // <- Nos construye la carta
            imgCarta.classList.add('carta');
            divCartasComputadora.append(imgCarta);
        
            if (puntosMinimos > 21) {
                break;
            }

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        // Callback => Una función que se manda como argumento
        setTimeout(() => {
            if (puntosComputadora === puntosJugador) {
                alert('Nadie gana');
            } else if (puntosMinimos > 21) {
                alert('La computadora gana');
            } else if (puntosComputadora > 21) {
                alert('Jugador gana');
            } else {
                alert('Computadora gana');
            }
            
        }, 10);

    }

    const valor = valorCarta(pedirCarta());

    /** Eventos  */
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        
        puntosJugador = puntosJugador + valorCarta(carta);
        puntosHTML[0].innerText = puntosJugador;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; // <- Nos construye la carta

        divCartasJugador.append(imgCarta);
        imgCarta.classList.add('carta');

        // Controlar puntos
        if (puntosJugador > 21) {
            console.warn('Te la pelaste hijo ._.');
            // La función "disabled" nos inhabilita lo que le pidamos...
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn('Ya ganaste hijo, eres una verga UwU');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }


    });


    btnDetener.addEventListener('click',() => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;

        turnoComputadora();
    });

    btnNuevo.addEventListener('click', () => {

        console.clear();
        inicializarJuego();
        // deck =[];

        // deck = crearDeck();

        puntosJugador     = 0;
        puntosComputadora = 0;

        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';

        btnPedir.disabled   = false;
        btnDetener.disabled = false;
    });



})(); // --> Esta línea ejecuta mi programa de manera inmediata 
     // Sin que sea accedido por el navegador...
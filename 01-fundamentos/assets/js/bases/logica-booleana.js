const regresaTrue = () =>{
   console.log('Regresa true');
   return true;
}

const regresaFalse = () =>{
   console.log('Regresa false');
   return false;
}

console.warn('Not o la negación');
console.log(!true); // true
//* El signo de admiración es una negación y en este caso nos retorna el contrario
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

//* True si todos los valores son verdaderos
console.warn('And');
console.log(true && true); // true
console.log(true && !false);

console.log("=============================================");

console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

console.log(" //======================= && ===================== //");
//* regresaTrue() && regresaFalse();
//* Segunda forma de representar una decisión
regresaFalse() && regresaTrue();

//* Da como resultado un false
console.log(true && true && true && false);

//* Por lo menos una de las condiciones debe de regresar true para que se ejecute el codigo
console.warn('OR');
console.log(true || false);

console.log(regresaTrue() || regresaFalse());

//? Da como resultado??? => true
console.log(true || true || true || false);

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull      = null;
const soyFalso     = false;

// ? Que imprime la linea de codigo de abajo?
const a1 = false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5});

// *Aparece sombreada la línea porqué esta nunca será ejecutada
if (true || true || true || false) {
   console.log('Hacer algo');
}else{
   console.log('Hacer otra cosa');
}
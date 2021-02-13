import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css'

const heroeId1 = 'capi';
const heroeId2 = 'spider';
const heroeId3 = 'iron';





/*-- implementación de la función buscarHeroe --*/
// Callback: función que es enviada como argumento
// buscarHeroe(heroeId1, (err, heroe1) => {

//   if (err) { return console.error(err); }


//   buscarHeroe(heroeId2, (err, heroe2) => {

//     if (err) { return console.error(err); }


//     buscarHeroe(heroeId3, (err, heroe3) => {

//       if (err) { return console.error(err); }

//       console.log(`Enviado a ${heroe1.nombre}, a ${heroe2.nombre}  y  ${heroe3.nombre}a la misión`);

//     });
//   });

// });

// buscarHeroe(heroeId1).then(heroe1 => {
//   // console.log(`Enviado ${heroe.nombre } a la misión`);
//   buscarHeroe(heroeId2).then(heroe2 => {
//     console.log(`Enviado a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);
//   });
// });

// Promise.all([true, 'hola', 123]).then(arr => {
//   console.log('promese.all: ',arr);
// });

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then(heroes => {
  console.warn('Ejemplo de promise.all');
  console.log(`Enviado a ${heroes[0].nombre} y a ${heroes[1].nombre} a la misión`);
});



Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
  .then( ([heroe1, heroe2]) =>{
    console.warn('Ejemplo de promise.all con desestructuración...');
  console.log(`Enviado a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);
});

console.log('Fin del programa....');

// Un callback siempre regresa primero el error y después la funcionalidad

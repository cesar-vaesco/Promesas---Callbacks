import { buscarHeroe, saludar } from './js/callbacks';
import './styles.css'

const heroeId1 = 'capi';
const heroeId2 = 'spider';
const heroeId3 = 'iron';

/*-- implementación de la función buscarHeroe --*/
// Callback: función que es enviada como argumento
buscarHeroe(heroeId1, (err, heroe1) => {

  if (err) { return console.error(err); }


  buscarHeroe(heroeId2, (err, heroe2) => {

    if (err) { return console.error(err); }


    buscarHeroe(heroeId2, (err, heroe3) => {

      if (err) { return console.error(err); }

      console.log(`Enviado a ${heroe1.nombre}, a ${heroe2.nombre}  y  ${heroe3.nombre}a la misión`);

    });
  });

});

console.log('Fin del programa....')

// Un callback siempre regresa primero el error y después la funcionalidad

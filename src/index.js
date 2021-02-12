import { buscarHeroe,saludar } from './js/callbacks';
import './styles.css'

const heroeId = 'capi';

 /*-- implementación de la función buscarHeroe --*/
// Callback: función que es enviada como argumento
buscarHeroe ( heroeId, (err, heroe) => {

  if (err) {
    console.error(err);

  }else {
    console.log(heroe);
  }
} );


// Un callback siempre regresa primero el error y después la funcionalidad

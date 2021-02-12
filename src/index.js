import { buscarHeroe,saludar } from './js/callbaks';
import './styles.css'

const heroeId = 'capi';

 /*-- implementación de la función buscarHeroe --*/
// Callback: función que es enviada como argumento
buscarHeroe ( heroeId, (heroe) => {
  console.log(heroe)
} );



// export const buscarHeroe = (id, callback) => {

//   const heroe = heroes[id];

//   callback(heroe);
// }


const bienvenida = 'Hola ';
saludar(bienvenida, (saludo)=> {
console.log( bienvenida + saludo);
});


// export const saludar = (nombre, callback) => {

//   const nombre = heroes[nombre];

//   callback(nombre);
// }

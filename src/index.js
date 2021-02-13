import { buscarHeroe, buscarHeroeAsync } from './js/promesas';


// promesaLenta.then(mensaje => console.log(mensaje));
// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
//        .then(mensaje => console.log(mensaje));

//  Promise.race resibe varias promesas y resuelve la primera que se resuelve

buscarHeroe('capi')
       .then(heroe => console.log(heroe))
       .catch(console.warn);//manejo de errores
buscarHeroeAsync('iron2')
       .then(heroe => console.log(heroe))
       .catch(console.warn);//manejo de errores

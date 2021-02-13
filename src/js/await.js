import { buscarHeroeAsync, buscarHeroe } from "./promesas";


const heroesIds = ['capi', 'iron', 'spider'];


export const obtenerHeroesArr = async() => {

  return await Promise.all(heroesIds.map( buscarHeroe ));

  // const heroesArr = [];

  // for (const id of heroesIds) {

  //   heroesArr.push(buscarHeroe(id));

  // }

  // // setTimeout(() => {
  // //   console.log('Obtener heroes');
  // //   console.log( heroesArr);
  // // }, 1000);

  // return await Promise.all(heroesArr);
};

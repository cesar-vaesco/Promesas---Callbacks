const heroes = {
  capi: {
    nombre: 'Capitán América',
    poder: 'Aguantar inyecciones sin morir'
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero'
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'La mejor reacción alergica a las picaduras de araña'
  }
}

export const buscarHeroe = (id) => {

  const heroe = heroes[id];


  return new Promise((resolve, reject) => {

    if (heroe) {
      resolve(heroe);
    } else {
      reject(`No existe un héroe con el id ${id}`);
    }

  });
}

const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promesa lenta'), 2000);
});
const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promesa media'), 1000);
});
const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promesa rápida'), 500);
});


export {
  promesaLenta,
  promesaMedia,
  promesaRapida
}

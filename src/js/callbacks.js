

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

// contrato de la función buscarHeroe
export const buscarHeroe = (id, callback) => {

  const heroe = heroes[id];

  if (heroe) {
    callback(null, heroe);

  } else {
    // Un error
    callback(`No existe un héroe con el id ${id}`);
  }
  //callback( heroe );
}

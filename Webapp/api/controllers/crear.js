module.exports = {


  friendlyName: 'Crear',


  description: 'Crear something.',


  inputs: {

  },

//creamos una salida para este caso una exitosa
  exits: {
    success:{
      //tipo de respuesta
      responseType:'redirect'
    }
  },


  fn: async function (inputs, exits) {

    const nuevo_a = await Articulo.create({
      marca:"pera",
      modelo:"ipon17",
      descripcion:"Bueno",
      precio:100,
      usuario:1
    })

/*
      const nuevo = await Usuario.create({
       nombre: "jaun",
       email: "juan@gmail.com"
       
      })

*/
    // All done.
    return exits.success("/");

  }


};

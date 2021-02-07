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

      const nuevo = await Articulo.create({
        descripcion :"poco uso",
        marca: "naranja",
        modelo: "N1",
        precio: 25
      })
    // All done.
    return exits.success("/");

  }


};

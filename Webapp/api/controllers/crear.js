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
        
      })
    // All done.
    return exits.success("/");

  }


};

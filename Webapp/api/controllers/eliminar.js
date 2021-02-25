module.exports = {


    friendlyName: 'Eliminar',
  
  
    description: 'Delete something.',
  
  
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
        //asi eliminamos
        let articulo = await Articulo.destroy({id: 4})
      // All done.
      return exits.success("/");
  
    }
  
  
  };
  
module.exports = {


    friendlyName: 'Eliminar',
  
  
    description: 'Edit something.',
  
  
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
        //asi editamos

        let articulo = await Articulo.update({id:3}, {descripcion:"Perfecto estado"})
  
       
  
      // All done.
      return exits.success("/");
  
    }
  
  
  };
  
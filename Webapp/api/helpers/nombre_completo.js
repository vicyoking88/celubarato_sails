module.exports = {


  friendlyName: 'Nombre completo',


  description: '',


  inputs: {
    nombre:{
      type:'string',
      example:'luis',
      descripcion:'the name of the person to greet.',
      required:true
    },

    apellido:{
      type:'string',
      example:'blanco',
      descripcion:'the name of the person to greet.',
      required:true
    }
  },

/*
  exits: {

    success: {
      description: 'All done.',
    },

  },
*/

  fn: async function (inputs, exits) {
    let result =`${inputs.nombre} ${inputs.apellido}`
    return exits.success(result)
    // TODO
  }


};


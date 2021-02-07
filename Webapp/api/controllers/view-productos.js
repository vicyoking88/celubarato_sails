module.exports = {


  friendlyName: 'View productos',

  description: 'Display "Productos" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/productos'
    }

  },

  fn: async function (inputs, exits) {

    const productos = await Articulo.find()
    // Respond with view.
    return exits.success({productos});

  }

};

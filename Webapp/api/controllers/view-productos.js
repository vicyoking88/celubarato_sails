module.exports = {


  friendlyName: 'View productos',

  description: 'Display "Productos" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/productos'
    }

  },

  fn: async function (inputs, exits) {

    //CONSULTAS INDEPENDIENTES DE LA BASE  DE DATOS

    //asi estamos pidiendo todos los articulos
    //const productos = await Articulo.find()
    //asi pedimos un articulo en especifico o igual a marca :pera
    //const productos = await Articulo.find({marca:"naranja"})
    //con dos condiciones
    //const productos = await Articulo.find({marca:"naranja", precio: 25})
    //MAYOR A 20
    /*
    const productos = await Articulo.find({
      precio:{
        '>':20
      }
    })
    */
    //CONSULTA MUCHO MAS AVANZADA

    const productos = await Articulo.find({
      //que salte unos registros
      where :{
        precio:{
          '>':20
        }
      },
      //limite de reigistros
     // skip:
     //ordenar
      sort:'precio ASC'
    })

    // Respond with view.
    return exits.success({productos});

  }

};

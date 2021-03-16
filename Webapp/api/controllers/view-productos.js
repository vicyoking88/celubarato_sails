module.exports = {


  friendlyName: 'View productos',

  description: 'Display "Productos" page.',

  inputs:{

    precio:{
      type:'number',
      required: false
    }

  },


  exits: {

    success: {
      viewTemplatePath: 'pages/home_celubarato'
    }

  },

  fn: async function (inputs, exits) {

    //imprimo en consola el valor del inputs precio si no tiene nada imprime indefinido
    //console.log('inputs:', inputs.precio)

    let productos
    if (inputs.precio){
      productos = await Articulo.find({precio: { ">" : inputs.precio}}).populate('usuario').populate('comentarios')
    }else{
      productos = await Articulo.find().populate('usuario').populate('comentarios')
    }
    return exits.success({productos});

    //asi solicitamos todos los articulos con su usuario y comentarios
   /* const productos = await Articulo.find().populate('usuario').populate('comentarios')*/


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

   /*
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
*/

    // Respond with view.
    //return exits.success({productos});

  }

};

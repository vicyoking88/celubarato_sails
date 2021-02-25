/**
 * Articulo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    descripcion: { type: 'string' },

    marca: { type: 'string' },

    modelo: { type: 'string' },

    precio: { type: 'number' },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    usuario :{
      model: 'usuario',
      columnName: 'usuario_id'
    },

    //para que traiga varios comentarios
    //
    comentarios:{
      collection: 'comentario',
      //es el que especifica la relacion
      via: 'articulo'
    }

  },

  /*******CALLBACKS */
  //METODO CON DOS PARAMETROS

  //dos parametros values = que se le van asignar al objeto que sera creado
  //proceed = funcion que se va retornar al terminal el callback
  beforeCreate(values, proceed){
    values.impuesto=values.precio * 5 / 100.0
    return proceed();
  }
};


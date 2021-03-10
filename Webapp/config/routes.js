/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

 // '/': { view: 'pages/homepage' },

  '/productos': { view: 'pages/productos' },

  /**con locals le decimos con cual layouts iniciar y tambien le enviamos variables */
  '/': { action: 'view-productos', locals: { layout:'layouts/iniciado', titulo:'Inicio 2', titulo_tabla: 'Articulos'} },

  /**podemos crear otras rutas que usen el mismo sitema MVC reutilizanco la misma pagina pero con otras variables*/
  '/hola': { action: 'view-productos', locals: { layout:'layouts/iniciado', titulo:'HOLA '} },

  '/crear':{action:'crear'},

  '/editar':{action: 'editar'},

  '/eliminar':{ action : 'eliminar'},


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};

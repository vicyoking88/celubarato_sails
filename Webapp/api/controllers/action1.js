/**ESTE ES UN CONTROLADOR SIMPLE */
/**con variables mas complejo  */
module.exports = async function (req, res){
    /**asi una respuesta string */
    //return res.send('hola')
    /**ASI despliega la vista */
    return res.view ('pages/action1', {nombre:"luis"})
}
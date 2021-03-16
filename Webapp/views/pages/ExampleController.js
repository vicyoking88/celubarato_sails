/**este controlador tiene varios actions */

module.exports ={
    accionUno: function(req, res){
        return res.send('UNo')
    },

    accionDos: function(req, res){
        return res.send('Dos')
    }
}
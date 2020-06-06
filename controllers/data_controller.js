const mode = require('./home_controller');
module.exports.home = function(req,res){
    mode.add(req,res);
    return res.redirect('back');
}


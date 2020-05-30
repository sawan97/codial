module.exports.profile = function(req,res){
     res.end('<h1>Users Profile</h1>');
}
module.exports.likes = function(req,res){
    res.end('<h1>1 like in your photo</h1>');
}
module.exports.comment = function(req,res){
    res.end('<h1>1 comment in your photo</h1>');   
}
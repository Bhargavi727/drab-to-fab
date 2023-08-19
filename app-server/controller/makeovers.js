module.exports.homeList= function(req,res){
    res.render('makeover-list',{title:'Home'});
};

module.exports.makeoverInfo= function(req,res){
    res.render('makeoverInfo',{title:'Drag to Fab'});
};
module.exports.addReview= function(req,res){
    res.render('makeover-review-form',{title:'Review'});
};
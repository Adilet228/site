var mongoose = require('mongoose');
// Blog Schema


var blogSchema = new mongoose.Schema({
    tournament:String,
    team1:String,
    team2:String,


    
    
    
});



module.exports = mongoose.model('Blog' , blogSchema);

var express = require("express");
var router = express.Router();


var Blog = require("../models/Blog.js")

router.post('/' , function ( req,res,next) {
    var blog = new Blog({
        title:req.body.title,
        description:req.body.description,
        img:req.body.img
    });
    
    blog.save(function(err,blog){
        if(err) return next(err)
        res.status(200).send(blog);
        })
        
        
    
})

router.get('/',function(req,res,next) {
    Blog.find().exec(function(err,blogs){
        if (err) return next(err);
        res.status(200).send(blogs);
    })
            
})


router.delete('/:id', function(req , res, next){
    Blog.remove({_id: req.params.id}).exec(function(err) {
         res.status(200).end();
    });
    

})
router.get('/:id',function(req,res,next) {
    console.log(req.params.id);
    Blog.findById(req.params.id).exec(function(err,blog){
        
        res.status(200).send(blog);
    })
            
})






module.exports = router;
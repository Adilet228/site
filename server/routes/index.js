var express = require("express");
var router = express.Router();
var LocalStrategy = require("passport-local").Strategy;
var passport = require("passport");






  // router.use(passport.initialize());
  // router.use(passport.session());
  


router.use('/api/blogs',require("./blog"))


router.get('*',function(req,res,next) {
   res.redirect('/#' +req.originalUrl)
            
})


module.exports = router;
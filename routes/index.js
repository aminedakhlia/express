var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var d = new Date();
var hour = d.getHours();
var day = d.getDay();
  console.log(d,"-",hour,"-",day)
if (hour > 9 && hour < 17 && day > 0 && day < 6) {
    res.render('home');

  }else{
  res.render('error',{error :{status : "we are closed !"}}); 
 }


});
router.get('/ourServices', function(req, res, next) {
  
  res.render('ourServices', { title: 'Services' });
});
router.get('/contactUs', function(req, res, next) {
  
  res.render('contactUs', { title: 'Contact Us' });
});
module.exports = router;

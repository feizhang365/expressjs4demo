var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var animalModel = require('../schema/animalSchema');
var Animal = animalModel.Animal;
/* init  add animal info */
router.get('/init', function(req, res, next) {
  var dog = new animal({name:"wangwang",type:"dog"});
  dog.save();
  res.render('index', { title: 'init success' });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  var dog = new Animal({name:"wangwang 1111",type:"dog"});
  dog.save();
  //find animal name = wangwang
  Animal.find({ 'name': 'wangwang' }, 'name type', function (err, dog) {
  	if (err) return handleError(err);
  	console.log('%s %s', dog.name, dog.type) // Space Ghost is a talk show host.
  	res.render('index', { title: JSON.stringify(dog)});
  })

  //res.render('index', { title: "find success"});
});

module.exports = router;

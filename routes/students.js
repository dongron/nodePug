var express = require('express');
var bodyParser = require('body-parser');
var Student = require('../db'); 

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');  
  res.render('index', { title: 'hello from students' });
});


router.get('/list', function(req, res, next) {
  // res.send('respond with a resource');
  let toShow = [];
  for (var i = 0; i < students.length; i++) {
  	toShow.push(/*students[i].id + ' ' + */students[i].imie + ' ' + students[i].nazwisko);
  }
  res.render('students', { title: 'hello from students', students: toShow });
});


router.get('/:id', function(req, res, next) {
	let i = parseInt(req.params.id) || 1 ;
	console.log('id ====' + i);
	let toShow = students[i].id + ' ' + students[i].imie + ' ' + students[i].nazwisko;
	res.render('index', { title: toShow });
});


router.post('/add', function(req, res, next) {
  let id = req.body.id;
  let imie = req.body.imie;
  let nazwisko = req.body.nazwisko;

  let student = {
  	"id": id,
  	"imie": imie,
  	"nazwisko": nazwisko
  };
  console.log(id + ' '+ imie + ' '+nazwisko)
  students.push(student);

});


var students = [
 {"id": 1, "imie":"Jan", "nazwisko":"Kowalski"},
 {"id": 2, "imie":"Zofia", "nazwisko":"Zalewska"},
 {"id": 3, "imie":"Tadeusz", "nazwisko":"Mostowski"},
 {"id": 4, "imie":"Inga", "nazwisko":"Baran"}
 ];







router.get('/st/', function(req, res, next) {
	Student.find(function (err, students) {
	if (err) return next(err);
		res.json(students);
	});
});

router.post('/st/', function(req, res, next) {
	Student.create(req.body, function (err, stud) {
	if (err) return next(err);
		res.json(stud);
	});
});





module.exports = router;

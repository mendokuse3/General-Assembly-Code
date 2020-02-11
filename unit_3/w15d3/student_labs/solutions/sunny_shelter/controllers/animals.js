const express = require('express');
const router = express.Router();

const Animals = require('../models/animals.js');

router.get('/', (req, res) => {
	Animals.find({}, (err, foundTodos) => {
		res.json(foundTodos);
	});
});


router.post('/', (req, res)=>{
    Animals.create(req.body, (err, createdTodo)=>{
        res.json(createdTodo); //.json() will send proper headers in response so client knows it's json coming back
    });
});

module.exports = router;

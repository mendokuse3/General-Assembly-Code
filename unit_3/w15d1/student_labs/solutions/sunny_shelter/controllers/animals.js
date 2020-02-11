const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	Todos.find({}, (err, foundTodos) => {
		res.json(foundTodos);
	});
});

router.post('/', (req, res) => {});

module.exports = router;

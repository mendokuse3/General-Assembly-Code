const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Fruit = require('./solutions/models/fruits.js.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended: true}))

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

// Index
app.get('/fruits', (req,res) => {
    Fruit.find({}, (error,allFruits) => {
        res.render('Index', {
            fruits: allFruits
        });
    })
})

// New
app.get('/fruits/new', (req,res) => {
    res.render('New');
})

// Create
app.post('/fruits/', (req,res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.redirect('/fruits');
    });

});

// show
app.get('/fruits/:id', (req,res)=> {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        res.render('Show', {
           fruit:foundFruit
        });
    })
});



app.listen(3000, ()=>{
    console.log('listening');
});
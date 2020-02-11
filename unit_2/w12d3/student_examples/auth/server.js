const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


const fruitsController = require('./controllers/fruits.js');
app.use('/fruits', fruitsController);

app.listen(3000, ()=>{
    console.log('listening...');
});

mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
})

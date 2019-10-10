// criando a app

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// carregando o banco
mongoose.connect('mongodb+srv://****:**********@azure1-y7vui.azure.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

// carregando os modelos
const Cliente = require('./models/cliente');
const Advogado = require('./models/advogado');
const Escritorio = require('./models/escritorio');

// carregando as Rotas
const indexRoute = require('./routes/indexRoute');
const clientRoute = require('./routes/clientRoute');
const advRoute = require('./routes/advRoute');
const escRoute = require('./routes/escRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/clientes', clientRoute);
app.use('/advogados', advRoute);
app.use('/escritorios', escRoute);

/*
//Habilidando o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});*/

module.exports = app;
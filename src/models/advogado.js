// Criando os schemas

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true)

const schema = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome e obrigatorio']
    },
    email: {
        type: String,
        required: [true, 'Email e obrigatorio'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email nao valido'],
        unique: true
    },
    senha: {
        type: String,
        required: [true, 'Senha e obrigatoria!'],
        minlength: [6, 'Senha tem que ter no minimo 6 caracteres']
    },
    telefone: {
        type: Number,
        required: false,
        minlength: [13, "Numero invalido"],
        maxlength: [13, 'Numero invalido'],
    },
    area: [{
        type: String,
        required: [true, 'Area de atuacao necessaria']
    }]
});

module.exports = mongoose.model('Advogado', schema);
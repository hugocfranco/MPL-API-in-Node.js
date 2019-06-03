// Criando controller de advogado

const mongoose = require('mongoose');
const Advogado = mongoose.model('Advogado');

exports.get = (req,res,next) => {
	Advogado
	.find({}, 'nome email area')
	.then(data => {
		res.status(200).send(data);
	}).catch(erro => {
		res.status(400).send(erro);
	});
};

exports.getByArea = (req,res,next) => {
	Advogado
	.find({
		area: req.params.area
	}, 'nome email area')
	.then(data => {
		res.status(200).send(data);
	}).catch(erro => {
		res.status(400).send(erro);
	});
};

exports.getByEmail = (req,res,next) => {
	Advogado
	.findOne({
		email: req.params.email
	}, 'email senha')
	.then(data => {
		res.status(200).send(data);
	}).catch(erro => {
		res.status(400).send({
			message: 'Advogado nao cadastrado',
			data: erro
		});
	});
};

exports.postCadastro = (req,res,next) => {
	var advogado = new Advogado(req.body);
	advogado
	.save()
	.then(x => {
		res.status(201).send({message: 'Advogado cadastrado'});
	}).catch(erro => {
		res.status(400).send({
			err: 'Advogado nao cadastrado',
			message: erro
		});
	});
};

exports.putSenha = (req,res,next) => {
	Advogado
	.findOneAndUpdate(req.params.email, {
		$set: {
			senha: req.body.senha
		}
	}).then(data => {
		res.status(200).send({
			message: 'Cadastro atualizado'
		});
	}).catch(erro => {
		res.status(400).send({
			err: 'Cadastro nao atualizado',
			message: erro
		});
	});
};

exports.deleteConta = (req,res,next) => {
	Advogado
	.findOneAndRemove({email: req.body.email})
	.then( data => {
		if (data == null){
			res.status(400).send({
			message: 'Cadastro nao encontrado'
		})}
		else{ res.status(200).send({
			message: 'Cadastro removido',
		})};
	});
};

mongoose.set('useFindAndModify', false);
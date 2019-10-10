// Criando controller de cliente

const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');

exports.get = (req, res, next) => {
	Cliente
		.find({}, 'nome email')
		.then(data => {
			res.status(200).send(data);
		}).catch(erro => {
			res.status(400).send(erro);
		});
};

exports.getByEmail = (req, res, next) => {
	Cliente
		.findOne({
			email: req.params.email
		}, 'email senha')
		.then(data => {
			res.status(200).send(data);
		}).catch(erro => {
			res.status(400).send({
				message: 'Cliente nao cadastrado',
				data: erro
			});
		});
};

exports.postCadastro = (req, res, next) => {
	var cliente = new Cliente(req.body);
	cliente
		.save()
		.then(x => {
			res.status(201).send({
				message: 'Cliente cadastrado'
			});
		}).catch(erro => {
			res.status(400).send({
				err: 'Cliente nao cadastrado',
				message: erro
			});
		});
};

exports.putSenha = (req, res, next) => {
	Cliente
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


exports.deleteConta = (req, res, next) => {
	Cliente
		.findOneAndRemove({
			email: req.body.email
		})
		.then(data => {
			if (data == null) {
				res.status(400).send({
					message: 'Cadastro nao cadastrado'
				})
			} else {
				res.status(200).send({
					message: 'Cadastro removido',
				})
			};
		});
};

mongoose.set('useFindAndModify', false);
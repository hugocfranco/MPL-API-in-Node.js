// Criando controller de advogado

const mongoose = require('mongoose');
const Advogado = mongoose.model('Advogado');

exports.get = (req, res, next) => {
	Advogado
		.find({}, 'nome email area')
		.then(data => {
			if (Array.isArray(data) && data.length) {
				res.status(200).send(data)
			} else {
				res.status(200).send({
					message: "Sem advogados cadastrados!"
				});
			};
		});
};

exports.getByArea = (req, res, next) => {
	Advogado
		.find({
			area: req.params.area
		}, 'nome email area')
		.then(data => {
			if (Array.isArray(data) && data.length) {
				res.status(200).send(data)
			} else {
				res.status(200).send({
					message: "Sem advogados por essa area!"
				});
			};
		});
};

exports.getByEmail = (req, res, next) => {
	Advogado
		.findOne({
			email: req.params.email
		}, 'email senha area nome')
		.then(data => {
			if (data = null) {
				res.status(200).send(data);
			} else {
				res.status(200).send({
					message: 'Advogado não cadastrado'
				});
			};
		});
};

exports.postCadastro = (req, res, next) => {
	var advogado = new Advogado(req.body);
	advogado
		.save()
		.then(x => {
			res.status(201).send({
				message: 'Advogado cadastrado'
			});
		}).catch(erro => {
			res.status(400).send({
				err: 'Advogado não cadastrado',
				message: erro
			});
		});
};

exports.putSenha = (req, res, next) => {
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
				err: 'Cadastro não atualizado',
				message: erro
			});
		});
};

exports.deleteConta = (req, res, next) => {
	Advogado
		.findOneAndRemove({
			email: req.body.email
		})
		.then(data => {
			if (data == null) {
				res.status(400).send({
					message: 'Cadastro não encontrado'
				})
			} else {
				res.status(200).send({
					message: 'Cadastro removido',
				});
			};
		});
};

mongoose.set('useFindAndModify', false);
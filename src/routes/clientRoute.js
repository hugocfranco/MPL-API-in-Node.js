// Criando uma rota de clintes

const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientcontroller')

router.get('/', controller.get);
router.get('/:email', controller.getByEmail);
router.post('/', controller.postCadastro);
router.put('/:senha', controller.putSenha);
router.delete('/', controller.deleteConta);

module.exports = router;
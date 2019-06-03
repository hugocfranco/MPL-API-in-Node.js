// Criando uma rota de advogados

const express = require('express');
const router = express.Router();
const controller = require('../controllers/esccontroller')

router.get('/', controller.get);
router.get('/:email', controller.getByEmail);
router.get('/area/:area', controller.getByArea);
router.post('/', controller.postCadastro);
router.put('/:email', controller.putSenha);
router.delete('/', controller.deleteConta);

module.exports = router;
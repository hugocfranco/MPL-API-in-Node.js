//cirando a primeira rota

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        titulo: "Marketplace Lawyers",
        version: "1.4"
    });
});

module.exports = router;
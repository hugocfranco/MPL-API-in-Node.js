//cirando a primeira rota

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Marketplace Lawyers",
        version: "0.2"
    });
});

module.exports = router;
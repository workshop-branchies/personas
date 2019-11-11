const express = require('express');
const router = express.Router();

const db = require('./db');

// retorna todas las personas
router.get('/', function (req, res) {
    res.send(db.get());
})

// retorna una persona por DNI
router.get('/:dni', function (req, res) {
    console.log(req.params);
    
    res.send(db.getByDNI(req.params.dni));
})

module.exports = router;
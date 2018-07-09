const express = require('express');
const router = express.Router();
const usuarios = require('../controllers/usuarios.controller');

//Rutas de las funciones
router.get('/', usuarios.getUsuarios);
router.post('/', usuarios.createUsuario);
router.get('/:id', usuarios.getUsuario);
router.put('/:id', usuarios.editUsuario);
router.delete('/:id', usuarios.deleteUsuario);

module.exports = router;
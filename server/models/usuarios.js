const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuariosSchema = new Schema({
    rut: { type: String, required: true },
    password: { type: String , required:true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    tipo: { type: String, required: true }
});

module.exports = mongoose.model('usuarios', UsuariosSchema);
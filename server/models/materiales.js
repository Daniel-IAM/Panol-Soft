const mongoose = require('mongoose');
const { Schema } = mongoose;

//Modelo tabla materiales
const MaterialesSchema = new Schema ({
    nombre: { type: String, required: true },
    cantidad: { type: Number, required: true },
    estado: { type: String, required: true }
});

module.exports = mongoose.model('Materiales', MaterialesSchema);
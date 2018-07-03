const mongoose = require('mongoose');

const URI = 'mongodb://localhost/panol-crud';

//Conexion base de datos
mongoose.connect(URI)
    .then(db =>console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
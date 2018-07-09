const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//Configuracion
//process.env.PORT toma cualquier puerto que el sistema op entregue
app.set('port', process.env.PORT || 3000);

//Funciones para procesar datos o Midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Rutas
app.use('/api/materiales', require('./routes/materiales.routes'));
app.use('/api/usuarios', require ('./routes/usuarios.routes'));

//Empezando el servidor
app.listen(app.get('port'), ()=> {
    console.log('Server on port ', app.get('port'));
});
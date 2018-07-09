const usuarios = require('../models/usuarios');
const UsuariosCtrl={};

//funciones crud
//Listar todos los usuarios
UsuariosCtrl.getUsuarios = async (req, res) =>{
    const usuario = await usuarios.find();
    res.json(usuario);
}

//Crear usuario
UsuariosCtrl.createUsuario = async (req, res) =>{
    const usuario = new usuarios({
        rut: req.body.rut,
        password: req.body.password,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        tipo: req.body.tipo
    });
    await usuario.save();
    res.json({
        'Status':'Usuario saved'
    });
}

//Listar un usuario
UsuariosCtrl.getUsuario = async (req, res) =>{
    const usuario = await usuarios.findById(req.params.id);
    res.json(usuario);
};

//Editar usuario
UsuariosCtrl.editUsuario = async (req, res) =>{
    const usuario = {
        rut: req.body.rut,
        password: req.body.password,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        tipo: req.body.tipo
     };  
    await usuarios.findByIdAndUpdate(req.params.id,{$set: usuario}, {new: true});
    res.json({
        'Status' : 'Material updated'
    });
};

//Eliminar usuario
UsuariosCtrl.deleteUsuario = async (req, res) =>{
    await usuarios.findByIdAndRemove(req.params.id);
    res.json({
        'Status' : 'Material deleted'
    });
};

module.exports = UsuariosCtrl;
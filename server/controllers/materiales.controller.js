const Material = require('../models/materiales');
const MaterialesCtrl={};

//funciones crud
//Listar todos los materiales
MaterialesCtrl.getMateriales = async (req, res) =>{
    const Materiales = await Material.find();
    res.json(Materiales);
}

//Crear material
MaterialesCtrl.createMaterial = async (req, res) =>{
    const Materiales = new Material({
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        estado: req.body.estado
    });
    await Materiales.save();
    res.json({
        'Status':'Material saved'
    });
}

//Listar un material 
MaterialesCtrl.getMaterial = async (req, res) =>{
    const Materiales = await Material.findById(req.params.id);
    res.json(Materiales);
};

//Editar material
MaterialesCtrl.editMaterial = async (req, res) =>{
    const Materiales = {
        nombre : req.body.nombre,
        cantidad : req.body.cantidad,
        estado : req.body.estado
     };  
    await Material.findByIdAndUpdate(req.params.id,{$set: Materiales}, {new: true});
    res.json({
        'Status' : 'Material updated'
    });
};

//Eliminar material
MaterialesCtrl.deleteMaterial = async (req, res) =>{
    await Material.findByIdAndRemove(req.params.id);
    res.json({
        'Status' : 'Material deleted'
    });
};

module.exports = MaterialesCtrl;
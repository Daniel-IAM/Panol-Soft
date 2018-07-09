export class Usuarios {
    _id : string;
    rut : string;
    password : string;
    nombre : string;
    apellido : string;
    tipo : string;

    constructor(_id = '',rut = '', password = '', nombre = '', apellido = '', tipo = ''){
        this._id = _id;
        this.rut = rut;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo = tipo;
    }
}

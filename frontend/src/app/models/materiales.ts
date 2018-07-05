export class Materiales {

    _id : string;
    nombre : string;
    cantidad : number;
    estado : string;

    constructor(_id = '', nombre = '', cantidad = 0, estado = ''){
        this._id = _id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.estado = estado;
    }
    
}

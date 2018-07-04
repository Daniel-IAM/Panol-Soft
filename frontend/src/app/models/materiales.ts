export class Materiales {

    constructor(_id = '', Nombre = '', Cantidad = 0, Estado = ''){
        this._id = _id;
        this.Nombre = Nombre;
        this.Cantidad = Cantidad;
        this.Estado = Estado;
    }

    _id : string;
    Nombre : string;
    Cantidad : number;
    Estado : string;
    
}

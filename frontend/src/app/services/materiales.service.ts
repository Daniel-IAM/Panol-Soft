import { Injectable } from '@angular/core';
//Permite comunicar del frontend al servidor
import { HttpClient } from '@angular/common/http';
//Importar clase
import { Materiales } from '../models/materiales';


@Injectable({
  providedIn: 'root'
})
export class MaterialesService {

  selectedMaterial: Materiales;
  materiales : Materiales [];
  readonly URL_API = 'http://localhost:3000/api/materiales';
  
  constructor(private http :HttpClient) {
    this.selectedMaterial = new Materiales();
  }

  GetMateriales() {
    return this.http.get(this.URL_API);
  }

  PostMateriales(materiales : Materiales) {
    return this.http.post(this.URL_API, materiales);
  }

  PutMaterial(materiales : Materiales) {
    return this.http.put(this.URL_API + `/${materiales._id}`, materiales);
  }

  DeleteMaterial (_id : string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}

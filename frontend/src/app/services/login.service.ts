import { Injectable } from '@angular/core';
//Permite comunicar del frontend al servidor
import { HttpClient } from '@angular/common/http';
//Importar clase
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  selectedUsuario: Usuarios;
  usuario : Usuarios [];
  readonly URL_API = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {
    this.selectedUsuario = new Usuarios();
   }
  
  GetUsuario() {
    return this.http.get(this.URL_API);
  }
}

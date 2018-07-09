import { Component, OnInit} from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';

//import { Usuarios } from '../../models/usuarios';

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  Login(form? : NgForm){
    if(form.value.rut == "111"){
      window.location.href= "www.facebook.com";
    }
  }

}

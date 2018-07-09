import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Permite trabajar con formularios ingresar datos, obtener datos, etc
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule, routingComponents} from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

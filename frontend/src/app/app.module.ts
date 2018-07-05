import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Permite trabajar con formularios ingresar datos, obtener datos, etc
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//componentes
import { AppComponent } from './app.component';
import { MaterialesComponent } from './components/materiales/materiales.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterialesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

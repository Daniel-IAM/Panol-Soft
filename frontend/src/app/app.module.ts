import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Permite trabajar con formularios ingresar datos, obtener datos, etc
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//componentes
import { AppComponent } from './app.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialesComponent,
    CalendarComponent
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

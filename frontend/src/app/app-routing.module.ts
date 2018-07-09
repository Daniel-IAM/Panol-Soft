import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {path:'materiales', component: MaterialesComponent},
    {path:'login', component: LoginComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [MaterialesComponent, LoginComponent]
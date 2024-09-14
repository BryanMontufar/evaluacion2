import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent},
    { path: 'ordenes', component:OrdenesComponent},
    { path: 'login', component:LoginComponent},

    {path: '', redirectTo: 'home', pathMatch: 'full'},

    { path: '"', component: Error404Component}
];

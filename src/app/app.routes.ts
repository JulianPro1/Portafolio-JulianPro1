import { Routes } from '@angular/router';


export const routes: Routes = [
{
    path:'presentation', 
    loadComponent: () => import('./presentation/presentation.component')
},
{
    path:'about-me',
    loadComponent: () => import('./about-me/about-me.component')
},
{
    path:'contact',
    loadComponent: () => import('./contact/contact.component')
},
{
    path:'education',
    loadComponent: () => import('./education/education.component')
},
{
    path:'tecnologies',
    loadComponent: () => import('./tecnologies/tecnologies.component')
},
{
    path:'experiencie',
    loadComponent: () => import('./experiencie/experiencie.component')
}


];

import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { MenuListComponent } from './Menu/menu-list/menu-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'menu',
        component:MenuListComponent
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];

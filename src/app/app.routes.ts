import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    {path:'',component:HomepageComponent},
    {path:"homepage",component:HomepageComponent},
    {path :"adminlogin",component:AdminloginComponent}
];

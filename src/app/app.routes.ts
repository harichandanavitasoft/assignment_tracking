import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewfacultyComponent } from './viewfaculty/viewfaculty.component';

export const routes: Routes = [
    {path:'',component:HomepageComponent,children:[
    {path :"adminlogin",component:AdminloginComponent}]},
    {path:"adminhome",component:AdminhomeComponent ,children:[
        {path:"viewfaculty",component:ViewfacultyComponent},

    ]},
    
];

import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewfacultyComponent } from './viewfaculty/viewfaculty.component';
import { FacultyloginComponent } from './facultylogin/facultylogin.component';
import { FacultyhomeComponent } from './facultyhome/facultyhome.component';

export const routes: Routes = [
    {path:'',component:HomepageComponent,children:[
    {path :"adminlogin",component:AdminloginComponent},
    {path:"facultylogin",component:FacultyloginComponent}
]},
    {path:"adminhome",component:AdminhomeComponent ,children:[
        {path:"viewfaculty",component:ViewfacultyComponent}]},
        {path:"facultyhome",component:FacultyhomeComponent}
    
];

import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewfacultyComponent } from './viewfaculty/viewfaculty.component';
import { FacultyloginComponent } from './facultylogin/facultylogin.component';
import { FacultyhomeComponent } from './facultyhome/facultyhome.component';
import { AddassignmentsComponent } from './addassignments/addassignments.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { StudentanswersComponent } from './studentanswers/studentanswers.component';

export const routes: Routes = [
    {path:'',component:HomepageComponent,children:[
    {path :"adminlogin",component:AdminloginComponent},
    {path:"facultylogin",component:FacultyloginComponent},
    {path:"studentlogin",component:StudentloginComponent}
]},
    {path:"adminhome",component:AdminhomeComponent ,children:[
        {path:"viewfaculty",component:ViewfacultyComponent},
        {path:"viewstudents",component:ViewstudentsComponent}
    ]},
        {path:"facultyhome",component:FacultyhomeComponent,children:[
            {path:"addasignments",component:AddassignmentsComponent}, 
            {path:"studentregister",component:StudentregistrationComponent},
            {path:"viewstudents",component:ViewstudentsComponent},
            {path:"assignments",component:AssignmentsComponent},
            {path:"answers",component:StudentanswersComponent},
        ]},
   
    
];

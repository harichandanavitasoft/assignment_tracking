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
import { MarksComponent } from './marks/marks.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { MarksListComponent } from './marks-list/marks-list.component';
import { TestComponent } from './test/test.component';
import { LandingComponent } from './landing/landing.component';
import { FacultyprofileComponent } from './facultyprofile/facultyprofile.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { AdminhomelandingComponent } from './adminhomelanding/adminhomelanding.component';
import { StudenthomelandigComponent } from './studenthomelandig/studenthomelandig.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContacusComponent } from './contacus/contacus.component';
import { FacultyhomelandigComponent } from './facultyhomelandig/facultyhomelandig.component';

export const routes: Routes = [
    {path:'',component:HomepageComponent, children:[
    {path :"",component:LandingComponent},
    {path :"adminlogin",component:AdminloginComponent},
    {path:"facultylogin",component:FacultyloginComponent},
    {path:"studentlogin",component:StudentloginComponent},
    {path:"aboutus",component:AboutusComponent},
    {path:'contactus',component:ContacusComponent}
]},

      
    {path:"adminhome",component:AdminhomeComponent ,children:[
        {path:"",component:AdminhomelandingComponent},
        {path:"viewfaculty",component:ViewfacultyComponent},
        {path:"viewstudents",component:ViewstudentsComponent}
    ]},
        {path:"facultyhome",component:FacultyhomeComponent,children:[
            {path:"",component:FacultyhomelandigComponent},
            {path:"addasignments",component:AddassignmentsComponent}, 
            {path:"facultyprofile",component:FacultyprofileComponent},
            {path:"viewstudents",component:ViewstudentsComponent},
            {path:"assignments",component:AssignmentsComponent},
            {path:"answers",component:StudentanswersComponent},
            {path:"marks",component:MarksComponent},
        ]},
        {path:"studenthome",component:StudenthomeComponent,children:[
            {path:"",component:StudenthomelandigComponent},
            {path:"markslist",component:MarksListComponent},
            {path:"test",component:TestComponent},
            {path:"studentprofile",component:StudentprofileComponent},
            
           

        ]},
   
        {path:"studentregister",component:StudentregistrationComponent}
];

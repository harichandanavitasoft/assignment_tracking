import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-facultylogin',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './facultylogin.component.html',
  styleUrl: './facultylogin.component.css'
})
export class FacultyloginComponent {

}

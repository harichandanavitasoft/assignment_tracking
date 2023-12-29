import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-facultyprofile',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './facultyprofile.component.html',
  styleUrl: './facultyprofile.component.css'
})
export class FacultyprofileComponent {

}

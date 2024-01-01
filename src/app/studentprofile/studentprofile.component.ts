import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-studentprofile',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './studentprofile.component.html',
  styleUrl: './studentprofile.component.css'
})
export class StudentprofileComponent {

}

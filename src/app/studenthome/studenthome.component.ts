import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-studenthome',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './studenthome.component.html',
  styleUrl: './studenthome.component.css'
})
export class StudenthomeComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-studentanswers',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule],
  templateUrl: './studentanswers.component.html',
  styleUrl: './studentanswers.component.css'
})
export class StudentanswersComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-viewstudents',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule],
  templateUrl: './viewstudents.component.html',
  styleUrl: './viewstudents.component.css'
})
export class ViewstudentsComponent {

}

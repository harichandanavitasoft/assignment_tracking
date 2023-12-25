import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-addassignments',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule],
  templateUrl: './addassignments.component.html',
  styleUrl: './addassignments.component.css'
})
export class AddassignmentsComponent {

}

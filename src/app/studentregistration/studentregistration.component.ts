import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-studentregistration',
  standalone: true,
  imports: [ RouterLink,RouterOutlet ,CommonModule],
  templateUrl: './studentregistration.component.html',
  styleUrl: './studentregistration.component.css'
})
export class StudentregistrationComponent {

}

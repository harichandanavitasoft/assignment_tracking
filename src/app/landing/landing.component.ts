import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

}

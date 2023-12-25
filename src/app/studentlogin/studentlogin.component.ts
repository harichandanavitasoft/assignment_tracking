import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-studentlogin',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './studentlogin.component.html',
  styleUrl: './studentlogin.component.css'
})
export class StudentloginComponent {

}

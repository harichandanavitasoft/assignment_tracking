import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminhomelanding',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './adminhomelanding.component.html',
  styleUrl: './adminhomelanding.component.css'
})
export class AdminhomelandingComponent {

}

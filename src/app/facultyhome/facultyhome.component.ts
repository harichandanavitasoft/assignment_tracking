import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-facultyhome',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './facultyhome.component.html',
  styleUrl: './facultyhome.component.css'
})
export class FacultyhomeComponent {

}

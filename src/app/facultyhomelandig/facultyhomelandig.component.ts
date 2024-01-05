import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-facultyhomelandig',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './facultyhomelandig.component.html',
  styleUrl: './facultyhomelandig.component.css'
})
export class FacultyhomelandigComponent {

}

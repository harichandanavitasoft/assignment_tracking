import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contacus',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './contacus.component.html',
  styleUrl: './contacus.component.css'
})
export class ContacusComponent {

}

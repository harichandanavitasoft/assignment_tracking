import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-adminhome',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {

}

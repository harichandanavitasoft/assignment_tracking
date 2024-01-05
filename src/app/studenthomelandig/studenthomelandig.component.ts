import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-studenthomelandig',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './studenthomelandig.component.html',
  styleUrl: './studenthomelandig.component.css'
})
export class StudenthomelandigComponent {

}

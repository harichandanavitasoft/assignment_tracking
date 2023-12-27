import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-marks-list',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,CommonModule],
  templateUrl: './marks-list.component.html',
  styleUrl: './marks-list.component.css'
})
export class MarksListComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterLink,RouterOutlet ,CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}

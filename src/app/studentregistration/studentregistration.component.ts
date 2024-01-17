import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-studentregistration',
  standalone: true,
  imports: [ RouterLink,RouterOutlet ,CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './studentregistration.component.html',
  styleUrl: './studentregistration.component.css'
})
export class StudentregistrationComponent implements OnInit {
  ngOnInit(): void {
    
    
  }

}

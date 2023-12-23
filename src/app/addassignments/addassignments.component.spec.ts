import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassignmentsComponent } from './addassignments.component';

describe('AddassignmentsComponent', () => {
  let component: AddassignmentsComponent;
  let fixture: ComponentFixture<AddassignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddassignmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

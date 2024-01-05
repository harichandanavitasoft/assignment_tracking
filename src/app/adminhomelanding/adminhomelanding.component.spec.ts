import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhomelandingComponent } from './adminhomelanding.component';

describe('AdminhomelandingComponent', () => {
  let component: AdminhomelandingComponent;
  let fixture: ComponentFixture<AdminhomelandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminhomelandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminhomelandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

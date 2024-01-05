import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenthomelandigComponent } from './studenthomelandig.component';

describe('StudenthomelandigComponent', () => {
  let component: StudenthomelandigComponent;
  let fixture: ComponentFixture<StudenthomelandigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudenthomelandigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudenthomelandigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

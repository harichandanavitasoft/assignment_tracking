import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyhomelandigComponent } from './facultyhomelandig.component';

describe('FacultyhomelandigComponent', () => {
  let component: FacultyhomelandigComponent;
  let fixture: ComponentFixture<FacultyhomelandigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyhomelandigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyhomelandigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

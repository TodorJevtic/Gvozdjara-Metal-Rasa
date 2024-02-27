import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitarijaComponent } from './sanitarija.component';

describe('SanitarijaComponent', () => {
  let component: SanitarijaComponent;
  let fixture: ComponentFixture<SanitarijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanitarijaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanitarijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

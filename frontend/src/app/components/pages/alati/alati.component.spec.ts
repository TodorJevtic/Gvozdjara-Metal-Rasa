import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlatiComponent } from './alati.component';

describe('AlatiComponent', () => {
  let component: AlatiComponent;
  let fixture: ComponentFixture<AlatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlatiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RasvetaComponent } from './rasveta.component';

describe('RasvetaComponent', () => {
  let component: RasvetaComponent;
  let fixture: ComponentFixture<RasvetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RasvetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RasvetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

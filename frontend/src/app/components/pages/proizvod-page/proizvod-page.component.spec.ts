import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodPageComponent } from './proizvod-page.component';

describe('ProizvodPageComponent', () => {
  let component: ProizvodPageComponent;
  let fixture: ComponentFixture<ProizvodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProizvodPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProizvodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

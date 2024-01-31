import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRepresentantesComponent } from './ver-representantes.component';

describe('VerRepresentantesComponent', () => {
  let component: VerRepresentantesComponent;
  let fixture: ComponentFixture<VerRepresentantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRepresentantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRepresentantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

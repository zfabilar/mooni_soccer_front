import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRepresentanteModalComponent } from './crear-representante-modal.component';

describe('CrearRepresentanteModalComponent', () => {
  let component: CrearRepresentanteModalComponent;
  let fixture: ComponentFixture<CrearRepresentanteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRepresentanteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRepresentanteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

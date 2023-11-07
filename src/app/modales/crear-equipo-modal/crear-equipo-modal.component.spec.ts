import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEquipoModalComponent } from './crear-equipo-modal.component';

describe('CrearEquipoModalComponent', () => {
  let component: CrearEquipoModalComponent;
  let fixture: ComponentFixture<CrearEquipoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEquipoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEquipoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

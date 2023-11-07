import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearJugadorModalComponent } from './crear-jugador-modal.component';

describe('CrearJugadorModalComponent', () => {
  let component: CrearJugadorModalComponent;
  let fixture: ComponentFixture<CrearJugadorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearJugadorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearJugadorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerJugadoresModalComponent } from './ver-jugadores-modal.component';

describe('VerJugadoresModalComponent', () => {
  let component: VerJugadoresModalComponent;
  let fixture: ComponentFixture<VerJugadoresModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerJugadoresModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerJugadoresModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

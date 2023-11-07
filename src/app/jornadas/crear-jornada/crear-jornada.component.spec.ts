import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearJornadaComponent } from './crear-jornada.component';

describe('CrearJornadaComponent', () => {
  let component: CrearJornadaComponent;
  let fixture: ComponentFixture<CrearJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearJornadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

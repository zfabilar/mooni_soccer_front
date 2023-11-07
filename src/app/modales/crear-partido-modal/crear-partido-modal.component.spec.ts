import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPartidoModalComponent } from './crear-partido-modal.component';

describe('CrearPartidoModalComponent', () => {
  let component: CrearPartidoModalComponent;
  let fixture: ComponentFixture<CrearPartidoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPartidoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPartidoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

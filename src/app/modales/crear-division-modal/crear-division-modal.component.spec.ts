import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDivisionModalComponent } from './crear-division-modal.component';

describe('CrearDivisionModalComponent', () => {
  let component: CrearDivisionModalComponent;
  let fixture: ComponentFixture<CrearDivisionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDivisionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDivisionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

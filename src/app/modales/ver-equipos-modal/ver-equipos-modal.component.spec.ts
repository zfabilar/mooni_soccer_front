import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEquiposModalComponent } from './ver-equipos-modal.component';

describe('VerEquiposModalComponent', () => {
  let component: VerEquiposModalComponent;
  let fixture: ComponentFixture<VerEquiposModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEquiposModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEquiposModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDivisionesComponent } from './ver-divisiones.component';

describe('VerDivisionesComponent', () => {
  let component: VerDivisionesComponent;
  let fixture: ComponentFixture<VerDivisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDivisionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDivisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

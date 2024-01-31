import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminaTemporadaComponent } from './termina-temporada.component';

describe('TerminaTemporadaComponent', () => {
  let component: TerminaTemporadaComponent;
  let fixture: ComponentFixture<TerminaTemporadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminaTemporadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminaTemporadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

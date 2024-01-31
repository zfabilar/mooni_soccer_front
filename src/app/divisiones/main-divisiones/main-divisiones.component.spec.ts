import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDivisionesComponent } from './main-divisiones.component';

describe('MainDivisionesComponent', () => {
  let component: MainDivisionesComponent;
  let fixture: ComponentFixture<MainDivisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDivisionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDivisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

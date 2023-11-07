import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDivisionComponent } from './crear-division.component';

describe('CrearDivisionComponent', () => {
  let component: CrearDivisionComponent;
  let fixture: ComponentFixture<CrearDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

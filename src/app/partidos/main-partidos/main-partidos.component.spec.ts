import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPartidosComponent } from './main-partidos.component';

describe('MainPartidosComponent', () => {
  let component: MainPartidosComponent;
  let fixture: ComponentFixture<MainPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPartidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

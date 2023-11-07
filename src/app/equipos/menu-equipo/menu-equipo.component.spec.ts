import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEquipoComponent } from './menu-equipo.component';

describe('MenuEquipoComponent', () => {
  let component: MenuEquipoComponent;
  let fixture: ComponentFixture<MenuEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

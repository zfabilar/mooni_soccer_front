import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPartidosComponent } from './menu-partidos.component';

describe('MenuPartidosComponent', () => {
  let component: MenuPartidosComponent;
  let fixture: ComponentFixture<MenuPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPartidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

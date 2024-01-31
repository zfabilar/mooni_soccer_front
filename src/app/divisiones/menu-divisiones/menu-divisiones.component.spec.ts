import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDivisionesComponent } from './menu-divisiones.component';

describe('MenuDivisionesComponent', () => {
  let component: MenuDivisionesComponent;
  let fixture: ComponentFixture<MenuDivisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDivisionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDivisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

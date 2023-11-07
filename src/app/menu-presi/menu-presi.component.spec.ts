import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPresiComponent } from './menu-presi.component';

describe('MenuPresiComponent', () => {
  let component: MenuPresiComponent;
  let fixture: ComponentFixture<MenuPresiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPresiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPresiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

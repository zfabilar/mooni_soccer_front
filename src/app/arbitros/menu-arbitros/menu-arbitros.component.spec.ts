import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuArbitrosComponent } from './menu-arbitros.component';

describe('MenuArbitrosComponent', () => {
  let component: MenuArbitrosComponent;
  let fixture: ComponentFixture<MenuArbitrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuArbitrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuArbitrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

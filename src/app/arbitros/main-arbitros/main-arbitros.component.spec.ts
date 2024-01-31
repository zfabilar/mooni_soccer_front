import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArbitrosComponent } from './main-arbitros.component';

describe('MainArbitrosComponent', () => {
  let component: MainArbitrosComponent;
  let fixture: ComponentFixture<MainArbitrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainArbitrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainArbitrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

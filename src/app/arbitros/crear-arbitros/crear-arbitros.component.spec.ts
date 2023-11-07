import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArbitrosComponent } from './crear-arbitros.component';

describe('CrearArbitrosComponent', () => {
  let component: CrearArbitrosComponent;
  let fixture: ComponentFixture<CrearArbitrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearArbitrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearArbitrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

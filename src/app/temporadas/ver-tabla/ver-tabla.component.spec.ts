import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTablaComponent } from './ver-tabla.component';

describe('VerTablaComponent', () => {
  let component: VerTablaComponent;
  let fixture: ComponentFixture<VerTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

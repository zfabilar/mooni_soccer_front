import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulaModalComponent } from './cedula-modal.component';

describe('CedulaModalComponent', () => {
  let component: CedulaModalComponent;
  let fixture: ComponentFixture<CedulaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CedulaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CedulaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

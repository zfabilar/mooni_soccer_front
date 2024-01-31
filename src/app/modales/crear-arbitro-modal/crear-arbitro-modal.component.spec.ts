import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArbitroModalComponent } from './crear-arbitro-modal.component';

describe('CrearArbitroModalComponent', () => {
  let component: CrearArbitroModalComponent;
  let fixture: ComponentFixture<CrearArbitroModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearArbitroModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearArbitroModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

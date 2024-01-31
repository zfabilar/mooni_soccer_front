import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerArbitrosComponent } from './ver-arbitros.component';
import { ArbitrosService } from 'src/app/core/services/arbitro/arbitros.service';

describe('VerArbitrosComponent', () => {
  let component: VerArbitrosComponent;
  let fixture: ComponentFixture<VerArbitrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerArbitrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerArbitrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

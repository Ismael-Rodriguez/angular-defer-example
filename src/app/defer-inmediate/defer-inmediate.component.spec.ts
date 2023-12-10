import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferInmediateComponent } from './defer-inmediate.component';

describe('DeferInmediateComponent', () => {
  let component: DeferInmediateComponent;
  let fixture: ComponentFixture<DeferInmediateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferInmediateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferInmediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

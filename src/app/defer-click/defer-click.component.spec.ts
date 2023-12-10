import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferClickComponent } from './defer-click.component';

describe('DeferClickComponent', () => {
  let component: DeferClickComponent;
  let fixture: ComponentFixture<DeferClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferClickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

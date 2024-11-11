import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PamentsComponent } from './paments.component';

describe('PamentsComponent', () => {
  let component: PamentsComponent;
  let fixture: ComponentFixture<PamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PamentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

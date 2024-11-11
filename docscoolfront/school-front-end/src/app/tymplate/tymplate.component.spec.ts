import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TymplateComponent } from './tymplate.component';

describe('TymplateComponent', () => {
  let component: TymplateComponent;
  let fixture: ComponentFixture<TymplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TymplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TymplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeAnimationComponent } from './bande-animation.component';

describe('BandeAnimationComponent', () => {
  let component: BandeAnimationComponent;
  let fixture: ComponentFixture<BandeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandeAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

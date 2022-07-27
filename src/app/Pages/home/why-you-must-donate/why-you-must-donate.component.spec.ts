import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyYouMustDonateComponent } from './why-you-must-donate.component';

describe('WhyYouMustDonateComponent', () => {
  let component: WhyYouMustDonateComponent;
  let fixture: ComponentFixture<WhyYouMustDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyYouMustDonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyYouMustDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

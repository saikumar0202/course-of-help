import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreLandingComponent } from './who-we-are-landing.component';

describe('WhoWeAreLandingComponent', () => {
  let component: WhoWeAreLandingComponent;
  let fixture: ComponentFixture<WhoWeAreLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeAreLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeAreLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesLandingComponent } from './stories-landing.component';

describe('StoriesLandingComponent', () => {
  let component: StoriesLandingComponent;
  let fixture: ComponentFixture<StoriesLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

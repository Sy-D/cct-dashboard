import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleguideOverviewComponent } from './styleguide-overview.component';

describe('StyleguideOverviewComponent', () => {
  let component: StyleguideOverviewComponent;
  let fixture: ComponentFixture<StyleguideOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleguideOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleguideOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

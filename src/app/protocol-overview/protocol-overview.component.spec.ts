import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolOverviewComponent } from './protocol-overview.component';

describe('ProtocolOverviewComponent', () => {
  let component: ProtocolOverviewComponent;
  let fixture: ComponentFixture<ProtocolOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocolOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

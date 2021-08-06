import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestUserNavComponent } from './guest-user-nav.component';

describe('GuestUserNavComponent', () => {
  let component: GuestUserNavComponent;
  let fixture: ComponentFixture<GuestUserNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestUserNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestUserNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

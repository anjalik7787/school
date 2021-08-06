import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserNavComponent } from './login-user-nav.component';

describe('LoginUserNavComponent', () => {
  let component: LoginUserNavComponent;
  let fixture: ComponentFixture<LoginUserNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

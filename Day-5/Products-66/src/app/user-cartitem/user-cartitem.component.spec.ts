import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCartitemComponent } from './user-cartitem.component';

describe('UserCartitemComponent', () => {
  let component: UserCartitemComponent;
  let fixture: ComponentFixture<UserCartitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCartitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCartitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

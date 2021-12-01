import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviationBarComponent } from './naviation-bar.component';

describe('NaviationBarComponent', () => {
  let component: NaviationBarComponent;
  let fixture: ComponentFixture<NaviationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

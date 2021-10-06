import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllOrderComponent } from './show-all-order.component';

describe('ShowAllOrderComponent', () => {
  let component: ShowAllOrderComponent;
  let fixture: ComponentFixture<ShowAllOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

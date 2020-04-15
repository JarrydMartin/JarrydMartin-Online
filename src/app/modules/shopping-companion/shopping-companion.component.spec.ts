import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCompanionComponent } from './shopping-companion.component';

describe('ShoppingCompanionComponent', () => {
  let component: ShoppingCompanionComponent;
  let fixture: ComponentFixture<ShoppingCompanionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCompanionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCompanionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

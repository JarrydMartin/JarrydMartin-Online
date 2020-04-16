import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoppingCatalogueItemComponent } from './add-shopping-catalogue-item.component';

describe('AddShoppingCatalogueItemComponent', () => {
  let component: AddShoppingCatalogueItemComponent;
  let fixture: ComponentFixture<AddShoppingCatalogueItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoppingCatalogueItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoppingCatalogueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

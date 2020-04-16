import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCatalogueComponent } from './shopping-catalogue.component';

describe('ShoppingCatalogueComponent', () => {
  let component: ShoppingCatalogueComponent;
  let fixture: ComponentFixture<ShoppingCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

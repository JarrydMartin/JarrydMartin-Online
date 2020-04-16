import { Component, OnInit } from '@angular/core';

import { ShoppingCatalogueService } from '../../services/shopping-catalogue.service';
import { ShoppingItem } from '../../models/shopping-item';

@Component({
  selector: 'app-add-shopping-catalogue-item',
  templateUrl: './add-shopping-catalogue-item.component.html',
  styleUrls: ['./add-shopping-catalogue-item.component.scss'],
})
export class AddShoppingCatalogueItemComponent implements OnInit {
  newShoppingCatalogueItem: ShoppingItem = new ShoppingItem();
  constructor(private shoppingCatalogueService: ShoppingCatalogueService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.newShoppingCatalogueItem.name &&
      this.newShoppingCatalogueItem.price
    ) {
      this.shoppingCatalogueService.addShoppingCatalogueItems(
        this.newShoppingCatalogueItem
      );
    }
  }
}

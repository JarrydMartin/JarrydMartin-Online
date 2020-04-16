import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../../models/shopping-item';

import { ShoppingCatalogueService } from '../../services/shopping-catalogue.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-catalogue',
  templateUrl: './shopping-catalogue.component.html',
  styleUrls: ['./shopping-catalogue.component.scss'],
})
export class ShoppingCatalogueComponent implements OnInit {
  shoppingListItems: Observable<ShoppingItem[]>;

  constructor(private shoppingCatalogueService: ShoppingCatalogueService) {}

  ngOnInit(): void {
    this.shoppingListItems = this.shoppingCatalogueService.getShoppingCatalogueItems();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatrialModule } from '../shared/matrial.module';
import { FormsModule } from '@angular/forms';

import { ShoppingCompanionRoutingModule } from './shopping-companion-routing.module';
import { ShoppingCompanionComponent } from './shopping-companion.component';
import { ShoppingCatalogueComponent } from './components/shopping-catalogue/shopping-catalogue.component';
import { AddShoppingCatalogueItemComponent } from './components/add-shopping-catalogue-item/add-shopping-catalogue-item.component';

@NgModule({
  declarations: [
    ShoppingCompanionComponent,
    ShoppingCatalogueComponent,
    AddShoppingCatalogueItemComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCompanionRoutingModule,
    MatrialModule,
    FormsModule,
  ],
})
export class ShoppingCompanionModule {}

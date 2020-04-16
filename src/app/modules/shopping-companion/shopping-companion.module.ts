import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCompanionRoutingModule } from './shopping-companion-routing.module';
import { ShoppingCompanionComponent } from './shopping-companion.component';
import { ShoppingCatalogueComponent } from './components/shopping-catalogue/shopping-catalogue.component';


@NgModule({
  declarations: [ShoppingCompanionComponent, ShoppingCatalogueComponent],
  imports: [
    CommonModule,
    ShoppingCompanionRoutingModule
  ]
})
export class ShoppingCompanionModule { }

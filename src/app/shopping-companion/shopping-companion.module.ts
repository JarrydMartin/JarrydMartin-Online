import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCompanionRoutingModule } from './shopping-companion-routing.module';
import { ShoppingCompanionComponent } from './shopping-companion.component';


@NgModule({
  declarations: [ShoppingCompanionComponent],
  imports: [
    CommonModule,
    ShoppingCompanionRoutingModule
  ]
})
export class ShoppingCompanionModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCompanionComponent } from './shopping-companion.component';
import { AddShoppingCatalogueItemComponent } from './components/add-shopping-catalogue-item/add-shopping-catalogue-item.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCompanionComponent,
  },
  {
    path: 'addCatalogueItem',
    component: AddShoppingCatalogueItemComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCompanionRoutingModule {}

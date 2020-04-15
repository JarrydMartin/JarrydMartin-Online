import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCompanionComponent } from './shopping-companion.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCompanionComponent,
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

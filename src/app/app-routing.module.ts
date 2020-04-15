import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'jarrydmartin-online',
    loadChildren: () =>
      import('./jarrydmartin-online/jarrydmartin-online.module').then(
        (m) => m.JarrydmartinOnlineModule
      ),
  },
  {
    path: 'shopping-companion',
    loadChildren: () =>
      import('./shopping-companion/shopping-companion.module').then(
        (m) => m.ShoppingCompanionModule
      ),
  },
  {
    path: '**',
    redirectTo: 'jarrydmartin-online',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'jarrydmartin-online',
    loadChildren: () =>
      import('./modules/jarrydmartin-online/jarrydmartin-online.module').then(
        (m) => m.JarrydmartinOnlineModule
      ),
  },
  {
    path: 'shopping-companion',
    loadChildren: () =>
      import('./modules/shopping-companion/shopping-companion.module').then(
        (m) => m.ShoppingCompanionModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

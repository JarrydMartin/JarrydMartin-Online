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
    path: '**',
    redirectTo: 'jarrydmartin-online',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

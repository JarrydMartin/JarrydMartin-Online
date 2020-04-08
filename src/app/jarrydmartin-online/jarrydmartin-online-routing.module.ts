import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JarrydmartinOnlineComponent } from './jarrydmartin-online.component';

const routes: Routes = [
  {
    path: '',
    component: JarrydmartinOnlineComponent,
    pathMatch: 'full',
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
export class JarrydmartinOnlineRoutingModule {}

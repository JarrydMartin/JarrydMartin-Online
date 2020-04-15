import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JarrydmartinOnlineComponent } from './jarrydmartin-online.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';

const routes: Routes = [
  {
    path: '',
    component: JarrydmartinOnlineComponent,
    children: [
      {
        path: '',
        component: MaincontentComponent,
      },
    ],
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

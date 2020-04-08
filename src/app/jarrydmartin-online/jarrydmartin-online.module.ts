import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JarrydmartinOnlineRoutingModule } from './jarrydmartin-online-routing.module';
import { JarrydmartinOnlineComponent } from './jarrydmartin-online.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';


@NgModule({
  declarations: [JarrydmartinOnlineComponent, SidenavComponent, ToolbarComponent, MaincontentComponent],
  imports: [
    CommonModule,
    JarrydmartinOnlineRoutingModule
  ]
})
export class JarrydmartinOnlineModule { }

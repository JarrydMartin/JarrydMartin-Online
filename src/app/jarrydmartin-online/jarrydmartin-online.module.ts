import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JarrydmartinOnlineRoutingModule } from './jarrydmartin-online-routing.module';
import { JarrydmartinOnlineComponent } from './jarrydmartin-online.component';


@NgModule({
  declarations: [JarrydmartinOnlineComponent],
  imports: [
    CommonModule,
    JarrydmartinOnlineRoutingModule
  ]
})
export class JarrydmartinOnlineModule { }

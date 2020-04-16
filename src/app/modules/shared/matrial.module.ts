import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class MatrialModule {}

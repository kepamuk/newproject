import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class MaterialModule {
}
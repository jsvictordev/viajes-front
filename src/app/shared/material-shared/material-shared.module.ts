import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [MatFormFieldModule, ReactiveFormsModule],
  exports: [MatFormFieldModule, ReactiveFormsModule],
})
export class MaterialSharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  imports: [CommonModule, MatButtonToggleModule],
  exports: [MatButtonToggleModule]
})
export class MaterialModule { }

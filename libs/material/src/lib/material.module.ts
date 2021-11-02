import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonToggleModule, MatButtonModule],
  exports: [MatButtonToggleModule, MatButtonModule]
})
export class MaterialModule { }

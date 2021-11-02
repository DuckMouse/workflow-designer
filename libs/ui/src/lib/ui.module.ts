import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@workflow-designer/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { uiComponents } from './components';



@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [MaterialModule, ...uiComponents],
  declarations: [...uiComponents]
})
export class UiModule { }

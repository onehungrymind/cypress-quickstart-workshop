import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@workshop/material';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class UiToolbarModule {}

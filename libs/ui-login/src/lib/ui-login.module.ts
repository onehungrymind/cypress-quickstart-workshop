import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@workshop/material';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [LoginComponent],
})
export class UiLoginModule {}

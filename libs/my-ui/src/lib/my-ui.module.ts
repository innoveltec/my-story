import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStoryButtonModule } from './button/button.component';

@NgModule({
  imports: [CommonModule, MyStoryButtonModule],
  exports: [MyStoryButtonModule],
})
export class MyUiModule {}

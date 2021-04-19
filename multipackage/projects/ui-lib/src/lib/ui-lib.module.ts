import { NgModule } from '@angular/core';
import { MyInputModule } from './my-input/src/my-input.module';
import { MySelectModule } from './my-select/my-select.module';
import { UiLibComponent } from './ui-lib.component';



@NgModule({
  declarations: [UiLibComponent],
  imports: [MyInputModule, MySelectModule],
  exports: [UiLibComponent]
})
export class UiLibModule { }

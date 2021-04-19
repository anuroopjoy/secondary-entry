import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MySelectComponent } from './my-select.component';

@NgModule({
    declarations: [MySelectComponent],
    imports: [FormsModule, NgSelectModule, CommonModule],
    exports: [MySelectComponent]
})
export class MySelectModule { }

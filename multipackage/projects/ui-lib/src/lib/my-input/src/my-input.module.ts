import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyInputComponent } from './my-input.component';

@NgModule({
    declarations: [MyInputComponent],
    imports: [FormsModule],
    exports: [MyInputComponent]
})
export class MyInputModule { }

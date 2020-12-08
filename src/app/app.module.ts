import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormControllerComponent } from './dynamic-form-controller.component';
import { TextboxComponent } from './Controllers/controller-textbox/textbox/textbox.component';
import { DropdownComponent } from './Controllers/controller-dropdown/dropdown/dropdown.component';
import { RadiobuttonComponent } from './Controllers/controller-radiobutton/radiobutton/radiobutton.component';
import { CheckboxComponent } from './Controllers/controller-checkbox/checkbox/checkbox.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormControllerComponent,
    TextboxComponent,
    DropdownComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    CheckboxComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}

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
import { CheckboxlistComponent } from './Controllers/controller-checkboxlist/checkboxlist/checkboxlist.component';
import { FileComponent } from './Controllers/controller-file/file/file.component';
import { TextareaComponent } from './Controllers/controller-textarea/textarea/textarea.component';
import { ImageComponent } from './Controllers/controller-image/image/image.component';
import { ButtonComponent } from './Controllers/controller-button/button/button.component';
import { TimeComponent } from './Controllers/controller-time/time/time.component';
import { DateComponent } from './Controllers/controller-date/date/date.component';
import { DatetimeComponent } from './Controllers/controller-datetime/datetime/datetime.component';
import { DatePipe } from '@angular/common';

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
    CheckboxlistComponent,
    DateComponent,
    TimeComponent,
    FileComponent,
    ButtonComponent,
    ImageComponent,
    TextareaComponent,
    DatetimeComponent,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}

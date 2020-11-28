import { Component } from '@angular/core';

import { ControllerService } from './controller.service';
import { ControllerBase } from './Controllers/controller-base';
import { async, Observable } from 'rxjs';
import { IDynamicFormInput } from './dynamic-form-interfaces';
import { Controls, StringNumber } from './dynamic-form-constants';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form (formGroupEmitter)="GetFormGroup($event)" [dynamicFormInput]="dynamicFormInput"></app-dynamic-form>
    </div>
  `,
  providers:  [ControllerService]
})
export class AppComponent {
  dynamicFormInput: IDynamicFormInput;

  constructor(service: ControllerService) {

    console.log(service.getControlsClasses());
    const controls = service.controlsClassesFactory([{
        key: 'brave',
        ControlType: service.getControlType(Controls.DROPDOWN),
        Label: 'Bravery Rating',
        Options: [
          { key: 1, value: 'Solid' },
          { key: 2, value: 'Great' },
          { key: 3, value: 'Good' },
          { key: 4, value: 'Unproven' }
        ],
        Order: 3
      }
    ,
    {   key: 'firstName',
        Label: 'First name',
        Value: () => 'Bombasto',
        Order: 1,
        ControlType : service.getControlType(Controls.TEXTBOX)
      }
    ,
    {   key: 'Email',
        Label: 'name',
        Value: () => 'Set',
        Order: 1,
        ControlType : service.getControlType(Controls.TEXTBOX),
        Validations : [
          { name : 'email',
            validator : Validators.email,
            message : 'the name is not valid'
          },
          { name : 'requrd',
            validator : Validators.required,
            message : 'the name is requesrd'
          }
        ]
      }
    ]);
    this.dynamicFormInput = {
      Id: 1,
      Title: 'Entisabe',
      Class: [''],
      ValidateForm: true, // Default value
      Controls: controls,
      Submit: () => { console.log('Submit'); },
      Cancel: () => { console.log('Cancel'); }
    };


  }
  GetFormGroup(event){
    console.log(event);
  }
}

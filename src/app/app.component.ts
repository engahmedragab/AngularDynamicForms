import { Component } from '@angular/core';

import { ControllerService } from './controller.service';
import { IDynamicFormInput } from './dynamic-form-interfaces';
import { Controls, EventTypes, Validations } from './dynamic-form-constants';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form (formGroupEmitter)="GetFormGroup($event)" [dynamicFormInput]="dynamicFormInput"></app-dynamic-form>
    </div>
  `
})
export class AppComponent {
  dynamicFormInput: IDynamicFormInput;

  constructor() {
    this.dynamicFormInput = {
      Id: 1,
      Title: 'Entisabe',
      Class: [''],
      ValidateForm: true, // Default value
      Controls: [{
        key: 'brave',
        ControlType: Controls.DROPDOWN,
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
        ControlType : Controls.TEXTBOX,
        Events: [{
          name: EventTypes.CLICK,
          callable: () => { console.log('test click event'); }
        }],
        Validations : [
          { name : 'required',
            validator : Validations.REQUIRED,
            message : 'the firstName is required'
          }
        ]
      }
    ,
    {   key: 'email',
        Label: 'Email',
        Value: () => 'Set',
        Order: 1,
        ControlType : Controls.TEXTBOX,
        Events: [{
          name: EventTypes.CLICK,
          callable: () => { console.log('test click event'); }
        },
        {
          name: EventTypes.CHANGE,
          callable: () => { console.log('test change event'); }
        },
        {
          name: EventTypes.BLUR,
          callable: () => { console.log('test blur event'); }
        }],
        Validations : [
          { name : null,
            validator : Validations.EMAIL,
            message : 'the Email is not valid'
          },
          { name : null,
            validator : Validations.REQUIRED,
            message : 'the Email is required',
          },
          { name : null,
            validator : Validations.MINLENGTH,
            message : 'the Email has wrong length! Required length',
            requiredValue : 10
          }
        ]
      }
    ],
      Submit: () => { console.log('Submit'); },
      Cancel: () => { console.log('Cancel'); }
    };


  }
  GetFormGroup(event){
    console.log(event);
  }
}

import { Time } from '@angular/common';
import { Component } from '@angular/core';

import { ControllerService } from './controller.service';
import { IDynamicFormInput } from './dynamic-form-interfaces';
import { Controls, EventTypes, Validations, Value } from './dynamic-form-constants';

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
        Label: 'Bravery Rating',
        Value: () => 2,
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
        Value: () => 'Set@s.ssfdf',
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
      },
      {
        key: 'bravooo',
        ControlType: Controls.RADIOBUTTON,
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
        Label: 'goool Rating',
        Value: () => 2,
        Options: [
          { key: 1, value: 'Solid' },
          { key: 2, value: 'Great' },
          { key: 3, value: 'Good' },
          { key: 4, value: 'Unproven' }
        ],
        Order: 4
      },
      {
        key: 'deal',
        ControlType: Controls.CHECKBOX,
        Value: () => true,
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
        Label: 'goool CheckBox',
        Order: 5
      },
      {
        key: 'edilo',
        ControlType: Controls.BUTTON,
        Events: [{
          name: EventTypes.CLICK,
          callable: () => { console.log('button click event'); }
        }],
        Label: 'button gooooo',
        Order: 6
      },
      {
        key: 'checkboxlist',
        ControlType: Controls.CHECKBOXLIST,
        Events: [,
        {
          name: EventTypes.CHANGE,
          callable: () => { console.log('test change event'); }
        }],
        Label: 'goool Rating',
        Value: () => [2,3],
        Options: [
          { key: 1, value: 'Solid' },
          { key: 2, value: 'Great' },
          { key: 3, value: 'Good' },
          { key: 4, value: 'Unproven' }
        ],
        Order: 7
      },
      {
        key: 'date',
        ControlType: Controls.DATE,
        Events: [,
        {
          name: EventTypes.CHANGE,
          callable: () => { console.log('test change event'); }
        }],
        Label: 'goool Rating',
        Value: () => new Date(),
        Order: 8
      },
      {
        key: 'time',
        ControlType: Controls.TIME,
        Events: [,
        {
          name: EventTypes.CHANGE,
          callable: () => { console.log('test change event'); }
        }],
        Label: 'goool Rating',
        Value: () => new Date(),
        Order: 9
      },
      {
        key: 'datetime',
        ControlType: Controls.DATETIME,
        Events: [,
        {
          name: EventTypes.CHANGE,
          callable: () => { console.log('test change event'); }
        }],
        Label: 'goool Rating',
        Value: () => new Date(),
        Order: 10
      },
      {
        key: 'image',
        ControlType: Controls.IMAGE,
        Events: [,
        {
          name: EventTypes.CLICK,
          callable: () => { console.log('image click event'); }
        }],
        Value : () => 'https://us.123rf.com/450wm/artshock/artshock1210/artshock121000046/15557821-imag-of-water-drops-on-window-and-blue-sky-background.jpg?ver=6',
        Label: 'goool Rating',
        Order: 11
      },
      {
        key: 'textArea',
        ControlType: Controls.TEXTAREA,
        Events: [,
        {
          name: EventTypes.CLICK,
          callable: () => { console.log('image click event'); }
        }],
        Value : () => 'At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.',
        Label: 'goool Rating',
        Order: 12
      },
      {
        key: 'file',
        ControlType: Controls.FILE,
        Events: [,
        {
          name: EventTypes.CHANGE,
          callable: () => { console.log('file change event'); }
        }],
        Label: 'file Rating',
        Order: 10
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

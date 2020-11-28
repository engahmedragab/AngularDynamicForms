import { Injectable } from '@angular/core';

import { DropDownController } from './Controllers/controller-dropdown';
import { ControllerBase } from './Controllers/controller-base';
import { of } from 'rxjs';
import { TextBoxController } from './Controllers/controller-textbox';
import { Controls, StringNumber } from './dynamic-form-constants';
import { RadioBottonController } from './Controllers/controller-radiobutton';
import { CheckBoxController } from './Controllers/controller-checkbox';
import { IControllerBase } from './dynamic-form-interfaces';

export default [
  DropDownController,
  TextBoxController,
  RadioBottonController,
  CheckBoxController
]

@Injectable()
export class ControllerService {

  static clone<T>(source: T, distination: any): any {
    const cloneObj = distination || {};
    // tslint:disable-next-line: forin
    for (const attribut in source) {
      cloneObj[attribut] = cloneObj[attribut] || source[attribut];
    }
    return cloneObj;
  }
  // TODO: get from a remote source of controller metadata
  // getControllers() {
  //   const controllers: ControllerBase<any>[] = [
  //     new DropDownController({
  //       key: 'brave',
  //       Label: 'Bravery Rating',
  //       options: [
  //         { key: 1, value: 'Solid' },
  //         { key: 2, value: 'Great' },
  //         { key: 3, value: 'Good' },
  //         { key: 4, value: 'Unproven' },
  //       ],
  //       Order: 3,
  //     }),

  //     new TextBoxController({
  //       key: 'firstName',
  //       Label: 'First name',
  //       value: 'Bombasto',
  //       order: 1,
  //     }),

  //     new TextBoxController({
  //       key: 'emailAddress',
  //       label: 'Email',
  //       attr: {
  //         type: 'email',
  //       },
  //       order: 2,
  //     }),
  //   ];

  //   return of(controllers.sort((a, b) => a.Order - b.Order));
  // }

  getControlsClasses() {
    return IControllerBase.GetImplementations();
  }

  controlsClassesFactory(controls: IControllerBase[]) {
    return controls.map(control =>
      {
        const controlClass = IControllerBase.GetImplementations().filter(x => x.name === control.ControlType )[0];
        return (new controlClass(control)) as ControllerBase<any>;
      });
  }

  getControlType(type: string): Controls {
    if (type) {
      //return Controls[Object.keys(Controls).filter(key => key.toString().toUpperCase().includes(type.toUpperCase()))?.pop()];
      for (let item in Controls) {
        if (item.toString().toUpperCase().includes(type.toUpperCase())){
          return Controls[item];
        } else if (type.toString().toUpperCase().includes(item.toUpperCase())) {
          return Controls[item];
        }
      }
    }
    return Controls.TEXTBOX;
  }
  // getItems(controls) {
  //   return controls.map((control) => {
  //     const label = control.type;
  //     return {
  //       label,
  //       action: () => new label(), // Setting up a simple factory method for use when this item is selected in the list
  //     };
  //   });
  // }
}

import { Controls, StringNumber } from '../../dynamic-form-constants';
import { IControllerBase } from '../../dynamic-form-interfaces';
import { ControllerBase } from '../controller-base';
import IBase = IControllerBase.register;

@IBase
export class RadioBottonController extends ControllerBase<StringNumber> {
  static getName: () =>  Controls.RADIOBUTTON;
  ControlType = Controls.RADIOBUTTON;
}

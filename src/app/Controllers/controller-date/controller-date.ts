import { Controls } from '../../dynamic-form-constants';
import { IControllerBase } from '../../dynamic-form-interfaces';
import { ControllerBase } from '../controller-base';
import IBase = IControllerBase.register;

@IBase
export class DateController extends ControllerBase<Date>{
  ControlType = Controls.DATE;
}

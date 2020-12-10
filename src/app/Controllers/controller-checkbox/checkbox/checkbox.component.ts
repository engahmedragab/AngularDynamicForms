import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckBoxController } from '../controller-checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit, AfterViewInit {
  @Input() controller: CheckBoxController;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // this.form.controls[this.controller.key].setValue(this.controller.Value.call(0) || false);
  }

  checkValue(event){
    // this.form.controls[this.controller.key].setValue(event.target.checked);
  }

}

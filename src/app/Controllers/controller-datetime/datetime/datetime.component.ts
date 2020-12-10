import { DatePipe } from '@angular/common';
import { DateTimeController } from './../controller-datetime';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {
  @Input() controller: DateTimeController;
  @Input() form: FormGroup;
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.form.controls[this.controller.key]?.setValue(this.datePipe.transform(this.controller.Value.call(0),'yyyy-MM-ddThh:mm'));
  }


}

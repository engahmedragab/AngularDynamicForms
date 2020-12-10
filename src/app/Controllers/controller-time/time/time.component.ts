import { DatePipe } from '@angular/common';
import { TimeController } from './../controller-time';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  @Input() controller: TimeController;
  @Input() form: FormGroup;
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.form.controls[this.controller.key]?.setValue(this.datePipe.transform(this.controller.Value.call(0),'HH:mm:ss'));
  }

}

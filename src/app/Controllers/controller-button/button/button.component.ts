import { BottonController } from './../controller-button';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() controller: BottonController;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}

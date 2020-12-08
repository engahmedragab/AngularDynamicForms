import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropDownController } from '../controller-dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() controller: DropDownController;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}

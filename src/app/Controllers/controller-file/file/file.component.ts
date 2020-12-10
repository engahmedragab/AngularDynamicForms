import { FileController } from './../controller-file';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input() controller: FileController;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}

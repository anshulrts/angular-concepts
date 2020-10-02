import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent implements OnInit {

  title = "Template Variable";

  onKeyUp(email) {
    console.log(email);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

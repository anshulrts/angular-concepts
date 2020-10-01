import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtin-directive',
  templateUrl: './builtin-directive.component.html',
  styleUrls: ['./builtin-directive.component.css']
})
export class BuiltinDirectiveComponent implements OnInit {
  title = "List of Courses";
  courses = ['course1', 'course2', 'course3'];


  constructor() { }

  ngOnInit(): void {
  }

}

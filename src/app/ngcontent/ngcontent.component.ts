import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontent',
  templateUrl: './ngcontent.component.html',
  styleUrls: ['./ngcontent.component.css']
})
export class NgcontentComponent implements OnInit {

  title = "ngContent";

  constructor() { }

  ngOnInit(): void {
  }

}

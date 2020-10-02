import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  title = "Custom Pipe";
  text = `This is a very long text which is gonna be modified using a custom pipe. Custom Pipe can be implemented
  using PipeTransform interface`;
  constructor() { }

  ngOnInit(): void {
  }

}

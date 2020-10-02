import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.css']
})
export class EventHandlingComponent implements OnInit {

  title = "Event Handling";

  onOuterDivClick($event) {
    console.log("Outer Div was clicked", $event);
  }

  onInnerDivClick($event) {
    $event.stopPropagation();
    console.log("Inner Div was clicked", $event);
  }

  onButtonClick($event) {
    console.log("Button was clicked", $event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

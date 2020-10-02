import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  title = "Property Binding"
  imageUrl = "http://lorempixel.com/100/100"

  constructor() { }

  ngOnInit(): void {
  }

}

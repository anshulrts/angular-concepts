import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-properties',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent implements OnInit {

  title = "Input Properties";
  isFavorite = true;

  constructor() { }

  ngOnInit(): void {
  }

  onFavoriteClick(eventArgs) {
    console.log("Favorite Changed", eventArgs);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tennis-game',
  templateUrl: './tennis-game.component.html',
  styleUrls: ['./tennis-game.component.css']
})
export class TennisGameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  score() {
    return `Love All`;
  }
}

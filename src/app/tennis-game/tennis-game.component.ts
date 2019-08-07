import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tennis-game',
  templateUrl: './tennis-game.component.html',
  styleUrls: ['./tennis-game.component.css']
})
export class TennisGameComponent implements OnInit {
  private firstPlayerScoreTimes = 0;

  constructor() {
  }

  ngOnInit() {
  }

  score() {
    if (this.firstPlayerScoreTimes === 1) {
      return `Fifteen Love`;
    }

    if (this.firstPlayerScoreTimes === 2) {
      return `Thirty Love`;
    }

    return `Love All`;
  }

  addFirstPlayerScoreTimes() {
    this.firstPlayerScoreTimes++;
  }
}

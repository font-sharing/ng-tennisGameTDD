import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tennis-game',
  templateUrl: './tennis-game.component.html',
  styleUrls: ['./tennis-game.component.css']
})
export class TennisGameComponent implements OnInit {
  private firstPlayerScoreTimes = 0;

  private scoreLookup: { [key: number]: string } = {
    1: 'Fifteen',
    2: 'Thirty',
  };

  constructor() {
  }

  ngOnInit() {
  }

  score() {
    if (this.firstPlayerScoreTimes > 0) {
      return `${this.scoreLookup[this.firstPlayerScoreTimes]} Love`;
    }

    return `Love All`;
  }

  addFirstPlayerScoreTimes() {
    this.firstPlayerScoreTimes++;
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tennis-game',
  templateUrl: './tennis-game.component.html',
  styleUrls: ['./tennis-game.component.css']
})
export class TennisGameComponent implements OnInit {
  private firstPlayerScoreTimes = 0;
  private secondPlayerScoreTimes = 0;

  private scoreLookup: { [key: number]: string } = {
    1: 'Fifteen',
    2: 'Thirty',
    3: 'Forty',
  };

  constructor() {
  }

  ngOnInit() {
  }

  score() {
    if (this.firstPlayerScoreTimes > 0) {
      return `${this.scoreLookup[this.firstPlayerScoreTimes]} Love`;
    }
    if (this.secondPlayerScoreTimes > 0) {
      return `Love ${this.scoreLookup[this.secondPlayerScoreTimes]}`;
    }
    return `Love All`;
  }

  addFirstPlayerScoreTimes() {
    this.firstPlayerScoreTimes++;
  }

  addSecondPlayerScoreTimes() {
    this.secondPlayerScoreTimes++;
  }
}

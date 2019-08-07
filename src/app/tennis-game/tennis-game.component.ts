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
    0: 'Love',
    1: 'Fifteen',
    2: 'Thirty',
    3: 'Forty',
  };

  constructor() {
  }

  ngOnInit() {
  }

  score() {
    if (this.firstPlayerScoreTimes !== this.secondPlayerScoreTimes) {
      return `${this.scoreLookup[this.firstPlayerScoreTimes]} ${this.scoreLookup[this.secondPlayerScoreTimes]}`;
    }

    if (this.firstPlayerScoreTimes === 1) {
      return 'Fifteen All';
    }

    if (this.firstPlayerScoreTimes === 2) {
      return 'Thirty All';
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

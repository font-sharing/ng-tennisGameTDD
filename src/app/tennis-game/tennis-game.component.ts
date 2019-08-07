import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tennis-game',
  templateUrl: './tennis-game.component.html',
  styleUrls: ['./tennis-game.component.css']
})
export class TennisGameComponent implements OnInit {
  @Input() firstPlayer: string;
  @Input() secondPlayer: string;

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
    if (this.isDifferenceScore()) {
      if (this.isGamePoint()) {
        return `${(this.advPlayer())} Adv`;
      }
      return this.normalScore();
    }
    return this.isDeuce() ? 'Deuce' : this.sameScore();
  }

  private isGamePoint() {
    return this.firstPlayerScoreTimes > 3 || this.secondPlayerScoreTimes > 3;
  }

  private advPlayer() {
    return this.firstPlayerScoreTimes > this.secondPlayerScoreTimes ? this.firstPlayer : this.secondPlayer;
  }

  private isDeuce() {
    return this.firstPlayerScoreTimes >= 3;
  }

  private normalScore() {
    return `${this.scoreLookup[this.firstPlayerScoreTimes]} ${this.scoreLookup[this.secondPlayerScoreTimes]}`;
  }

  private isDifferenceScore() {
    return this.firstPlayerScoreTimes !== this.secondPlayerScoreTimes;
  }

  private sameScore() {
    return `${this.scoreLookup[this.firstPlayerScoreTimes]} All`;
  }

  addFirstPlayerScoreTimes() {
    this.firstPlayerScoreTimes++;
  }

  addSecondPlayerScoreTimes() {
    this.secondPlayerScoreTimes++;
  }
}

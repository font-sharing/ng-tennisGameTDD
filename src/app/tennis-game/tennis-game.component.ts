import {Component, Input, OnInit} from '@angular/core';
import {TestService} from '../test.service';

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
    3: 'Forty'
  };

  constructor(private test: TestService) {
  }

  ngOnInit() {
  }

  getNames(){
    return this.test.getNames();
  }

  score() {
    if (this.isDiffScore()) {
      return this.isGamePoint() ? `${(this.advPlayer())} ${(this.advState())}` : this.normalScore();
    }

    return this.isDeuce() ? 'Deuce' : this.sameScore();
  }

  private advState() {
    return Math.abs(this.firstPlayerScoreTimes - this.secondPlayerScoreTimes) === 1 ? 'Adv' : 'Win';
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

  private isDiffScore() {
    return this.firstPlayerScoreTimes !== this.secondPlayerScoreTimes;
  }

  private normalScore() {
    return `${this.scoreLookup[this.firstPlayerScoreTimes]} ${this.scoreLookup[this.secondPlayerScoreTimes]}`;
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

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TennisGameComponent} from './tennis-game.component';

describe('TennisGameComponent', () => {
  let component: TennisGameComponent;
  let fixture: ComponentFixture<TennisGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TennisGameComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function scoreShouldBe(expected: string) {
    expect(component.score()).toBe(expected);
  }

  it('Love All', () => {
    scoreShouldBe('Love All');
  });

  it('Fifteen Love', () => {
    component.addFirstPlayerScoreTimes();
    scoreShouldBe('Fifteen Love');
  });

  function givenFirstPlayerScoreTimes(times: number) {
    for (let i = 0; i < times; i++) {
      component.addFirstPlayerScoreTimes();
    }
  }

  it('Thirty Love', () => {
    givenFirstPlayerScoreTimes(2);
    scoreShouldBe('Thirty Love');
  });

  it('Forty Love', () => {
    givenFirstPlayerScoreTimes(3);
    scoreShouldBe('Forty Love');
  });

  it('Love Fifteen', () => {
    component.addSecondPlayerScoreTimes();
    scoreShouldBe('Love Fifteen');
  });

  function givenSecondPlayerScoreTimes(times: number) {
    for (let i = 0; i < times; i++) {
      component.addSecondPlayerScoreTimes();
    }
  }

  it('Love Thirty', () => {
    givenSecondPlayerScoreTimes(2);
    scoreShouldBe('Love Thirty');
  });

  it('Fifteen All', () => {
    givenSecondPlayerScoreTimes(1);
    givenFirstPlayerScoreTimes(1);
    scoreShouldBe('Fifteen All');
  });

  it('Thirty All', () => {
    givenSecondPlayerScoreTimes(2);
    givenFirstPlayerScoreTimes(2);
    scoreShouldBe('Thirty All');
  });

  function givenDeuce() {
    givenSecondPlayerScoreTimes(3);
    givenFirstPlayerScoreTimes(3);
  }

  it('Deuce', () => {
    givenDeuce();
    scoreShouldBe('Deuce');
  });

  it('Tim Adv', () => {
    givenDeuce();
    givenFirstPlayerScoreTimes(1);
    scoreShouldBe('Tim Adv');
  });
});

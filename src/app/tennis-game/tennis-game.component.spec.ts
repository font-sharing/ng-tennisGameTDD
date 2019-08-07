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
});

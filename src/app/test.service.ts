import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() {
  }

  getNames() {
    return ['Tim', '1G', 'Giant', 'Hen'];
  }
}

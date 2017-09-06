import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { IHero } from '../model';

// The heroes API we created.
const URL = 'https://angular-1-training-class-api.herokuapp.com/heroes';

export class HeroAPIService {
  constructor() {}

  getAll = (): Observable<IHero[]> => {
      console.log('getting all');
    return Observable.fromPromise(fetch(URL, {
        method: 'GET'
    }).then(resp => resp.json()))
    //.map(records => records.map(fromServer));
  }

}

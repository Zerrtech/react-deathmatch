import { Epic } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { IAppState } from '../../store/model';
import { HeroAPIAction, HeroAPIActions } from './actions';
import { HeroAPIService } from './service';

const heroesNotAlreadyFetched = (
  state: IAppState): boolean => !(
    state &&
    state.heroes &&
    state.heroes.heroes.length);

export default function createLoadHeroEpic(): Epic<HeroAPIAction, IAppState> {
    var service = new HeroAPIService();
    var actions = new HeroAPIActions();
    return (action$, store) => action$
      .ofType(HeroAPIActions.LOAD_HEROES)
      .filter(() => heroesNotAlreadyFetched(store.getState()))
      .switchMap(() => service.getAll()
        .map(data => actions.loadSucceeded(data))
        .catch(response => of(actions.loadFailed({
          status: '' + response.status,
        })))
        .startWith(actions.loadStarted()));
  }

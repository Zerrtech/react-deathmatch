import { FluxStandardAction } from 'flux-standard-action';
import { IHero } from '../model';

type Payload = IHero[];
interface MetaData {};
export type HeroAPIAction = FluxStandardAction<Payload, MetaData>;

/*
 * action creators
 */
export class HeroAPIActions {
  static readonly LOAD_HEROES = 'LOAD_HEROES';
  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  loadHeroes = (): HeroAPIAction => ({
    type: HeroAPIActions.LOAD_HEROES,
    payload: [],
    meta: {}
  });

  loadStarted = (): HeroAPIAction => ({
    type: HeroAPIActions.LOAD_STARTED,
    payload: [],
    meta: {}
  })

  loadSucceeded = (payload: Payload): HeroAPIAction => ({
    type: HeroAPIActions.LOAD_SUCCEEDED,
    payload,
    meta: {}
  })

  loadFailed = (error:any): HeroAPIAction => ({
    type: HeroAPIActions.LOAD_FAILED,
    payload: [],
    error,
    meta: {}
  })

}

export function loadHeroes(): HeroAPIAction {
  return {
    type: HeroAPIActions.LOAD_HEROES,
    payload: [],
    meta: {}
  };
}
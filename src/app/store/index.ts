import { combineReducers } from 'redux';
import { createHeroAPIReducer } from '../hero/api/reducer';
import { routerReducer } from 'react-router-redux'

export let reducers = combineReducers({
    heroes: createHeroAPIReducer(),
    router: routerReducer,
});
import { combineReducers } from 'redux';

import nav from './nav';
import navs from './test';
import home from './home';

const rootReducer = combineReducers({
  nav,
  navs,
  home,
});

export default rootReducer;
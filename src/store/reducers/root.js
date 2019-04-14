import { combineReducers } from 'redux';

import ideasReducer from './ideas';

const reducers = {
  ideasState: ideasReducer,
};

export default combineReducers(reducers);

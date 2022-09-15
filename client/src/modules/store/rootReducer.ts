import { combineReducers } from '@reduxjs/toolkit';

import { patientReducer } from '../reducers';

const rootReducer = combineReducers({
  patientReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

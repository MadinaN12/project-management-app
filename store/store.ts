import { combineReducers, configureStore } from '@reduxjs/toolkit';
import boardReducer from './reducers/storeSlice';

export const rootReducer = combineReducers({
  boardReducer,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];

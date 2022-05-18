import { combineReducers, configureStore } from '@reduxjs/toolkit';
import boardReducer from './reducers/storeSlice';
import taskReducer from './reducers/taskSlice';
import boardSlice, { boardRef } from '../stores/boards/slices';

export const rootReducer = combineReducers({
  boardReducer,
  taskReducer,
  boards: boardSlice,
  refreshBoard: boardRef,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];

import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { exampleReducer } from './admin';

export const store = configureStore({
  reducer: {
    exampleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

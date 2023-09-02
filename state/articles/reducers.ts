import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { asyncActionExample, setIsSearching } from './actions';

export type state = {
  // all the state type
  value: number;
  pending: boolean;
  isSearching: boolean; // not used
};

const initialState: state = {
  value: 0,
  pending: false,
  isSearching: false, // not used
};

export const articlesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(
      setIsSearching, // currently not used
      (state, { payload }: PayloadAction<{ value: boolean }>) => {
        state.isSearching = payload.value;
      }
    )
    .addCase(asyncActionExample.pending, (state) => {
      // start request
      state.pending = true;
      return state;
    })
    .addCase(asyncActionExample.fulfilled, (state, { payload }) => {
      // request succeed
      state.pending = true;
      return state + payload;
    })
    .addCase(asyncActionExample.rejected, (state) => {
      // request failed
      return state;
    });
});

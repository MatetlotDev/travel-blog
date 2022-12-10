import { createReducer } from '@reduxjs/toolkit';
import { actionExample, asyncActionExample } from './actions';

export type state = {
  // all the state type
  value: number;
  pending: boolean;
};

const initialState: state = {
  value: 0,
  pending: false,
};

export const homeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionExample, (state) => {
      // do something
      return state;
    })
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
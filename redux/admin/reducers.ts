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

export const adminReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionExample, (state) => {
      // do something
      return state;
    })
    .addCase(asyncActionExample.pending, (state) => {
      // start request
      state.pending = true;
    })
    .addCase(asyncActionExample.fulfilled, (state) => {
      // request succeed
      state.pending = true;
    })
    .addCase(asyncActionExample.rejected, (state) => {
      // request failed
      return state;
    });
});


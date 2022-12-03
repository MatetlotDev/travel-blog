import { createReducer } from '@reduxjs/toolkit';
import { openCloseMenu } from './actions';

export type state = {
  menuOpen: boolean;
  actualPage: string;
};

const initialState: state = {
  menuOpen: false,
  actualPage: 'homepage',
};

// ! typer le payload !
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openCloseMenu, (state, { payload }) => {
      return {
        ...state,
        open: payload,
      }
    })
});

export { reducer as globalReducer };
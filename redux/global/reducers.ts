import { createReducer } from '@reduxjs/toolkit';
import { openCloseMenu } from './actions';

export type state = {
  menuState: boolean;
  actualPage: string;
};

const initialState: state = {
  menuState: false,
  actualPage: 'homepage',
};

// ! typer le payload, ne pas mettre any !
export const globalReducer = createReducer(initialState, (builder) => {
  builder.addCase(openCloseMenu, (state, { payload }): any => {
    return {
      ...state,
      menuState: payload,
    };
  });
});

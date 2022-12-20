import { createReducer } from '@reduxjs/toolkit';
import { closeMenu, openMenu } from './actions';

export type state = {
  open: boolean;
  actualPage: string;
};

const initialState: state = {
  open: false,
  actualPage: 'accueil',
};

// ! typer le payload, ne pas mettre any !
export const globalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openMenu, (state) => {
      state.open = true;
    })
    .addCase(closeMenu, (state) => {
      state.open = false;
    });
});

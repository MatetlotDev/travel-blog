import { createReducer } from '@reduxjs/toolkit';
import { Picture } from 'constants/global';
import {
  closeCarouselFullScreen,
  closeMenu,
  openCarouselFullScreen,
  openMenu,
  setImageCarouselFullScreen,
} from './actions';

export type state = {
  open: boolean;
  actualPage: string;
  carouselFullScreen: {
    image: Picture | null;
    open: boolean;
  };
};

const initialState: state = {
  open: false,
  actualPage: 'accueil',
  carouselFullScreen: {
    image: null,
    open: false,
  },
};

// ! typer le payload, ne pas mettre any !
export const globalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openMenu, (state) => {
      state.open = true;
    })
    .addCase(closeMenu, (state) => {
      state.open = false;
    })
    .addCase(openCarouselFullScreen, (state) => {
      state.carouselFullScreen.open = true;
    })
    .addCase(closeCarouselFullScreen, (state) => {
      state.carouselFullScreen.open = false;
    })
    .addCase(setImageCarouselFullScreen, (state, { payload }) => {
      state.carouselFullScreen.image = payload.image;
    });
});

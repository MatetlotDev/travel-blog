import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selector = (state: RootState) => state.imagesReducer;

export const imagesSelector = createSelector(selector, (state) => state);

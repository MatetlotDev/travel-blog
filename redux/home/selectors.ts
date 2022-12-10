import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selector = (state: RootState) => state.homeReducer;

export const homeSelector = createSelector(selector, (state) => state);


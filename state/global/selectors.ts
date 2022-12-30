import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selector = (state: RootState) => state.globalReducer;

export const globalSelector = createSelector(selector, (state) => state);

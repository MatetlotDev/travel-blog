import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selector = (state: RootState) => state.journalReducer;

export const journalSelector = createSelector(selector, (state) => state);

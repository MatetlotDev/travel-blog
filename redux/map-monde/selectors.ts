import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selector = (state: RootState) => state.mapMondeReducer;

export const mapMondeSelector = createSelector(selector, (state) => state);

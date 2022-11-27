import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const exampleSelector = (state: RootState) => state.exampleReducer;

export const selector = createSelector(exampleSelector, (state) => state);

// use as -> const { value, pending } = useAppSelector(exampleSelector);

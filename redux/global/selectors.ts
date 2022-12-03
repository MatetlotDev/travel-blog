import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

export const globalReducer = (state: RootState) => state.globalReducer;

export const selector = createSelector(globalReducer, (state) => state);

// use as -> const { value, pending } = useAppSelector(exampleSelector);

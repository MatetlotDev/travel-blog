import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selector = (state: RootState) => state.globalReducer;

export const globalReducerSelector = createSelector(selector, (state) => state);

// use as -> const { value, pending } = useAppSelector(exampleSelector);

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selector = (state: RootState) => state.articlesReducer;

export const articlesSelector = createSelector(selector, (state) => state);

// use as -> const { value, pending } = useAppSelector(exampleSelector);

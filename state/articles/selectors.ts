import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selector = (state: RootState) => state.articlesReducer;

// currently not used
export const articlesSelector = createSelector(
  selector,
  (articlesSelector) => articlesSelector
);

// use as -> const { value, pending } = useAppSelector(exampleSelector);

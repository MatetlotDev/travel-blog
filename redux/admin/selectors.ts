import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const selector = (state: RootState) => state.adminReducer;

export const adminSelector = createSelector(selector, (state) => state);

// use as -> const { value, pending } = useAppSelector(exampleSelector);

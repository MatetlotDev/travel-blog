import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './global';
import { articlesReducer } from './articles';
import { homeReducer } from './home';
import { imagesReducer } from './images';
import { journalReducer } from './journal';
import { mapMondeReducer } from './map-monde';

export const store = configureStore({
  reducer: {
    globalReducer,
    articlesReducer,
    homeReducer,
    imagesReducer,
    journalReducer,
    mapMondeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

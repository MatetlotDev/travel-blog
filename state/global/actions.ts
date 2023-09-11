import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Picture } from 'constants/global';

// simple actions
const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';
const OPEN_CAROUSEL_FULL_SCREEN = 'OPEN_CAROUSEL_FULL_SCREEN';
const CLOSE_CAROUSEL_FULL_SCREEN = 'CLOSE_CAROUSEL_FULL_SCREEN';
const SET_IMAGE_CAROUSEL_FULL_SCREEN = 'SET_IMAGE_CAROUSEL_FULL_SCREEN';

// request actions
const ASYNC_ACTION = 'ASYNC_ACTION';

// simple actions
export const openMenu = createAction(OPEN_MENU);
export const closeMenu = createAction(CLOSE_MENU);
export const openCarouselFullScreen = createAction(OPEN_CAROUSEL_FULL_SCREEN);
export const closeCarouselFullScreen = createAction(CLOSE_CAROUSEL_FULL_SCREEN);
export const setImageCarouselFullScreen = createAction<{
  image: Picture | null;
}>(SET_IMAGE_CAROUSEL_FULL_SCREEN);

// request actions
export const asyncActionExample = createAsyncThunk(ASYNC_ACTION, async () => {
  const response = await axios.get('http://urlExample');
  return response.data;
});

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// simple actions
const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';

// request actions
const ASYNC_ACTION = 'ASYNC_ACTION';

// simple actions
export const openMenu = createAction(OPEN_MENU);
export const closeMenu = createAction(CLOSE_MENU);

// request actions
export const asyncActionExample = createAsyncThunk(ASYNC_ACTION, async () => {
  const response = await axios.get('http://urlExample');
  return response.data;
});


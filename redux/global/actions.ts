import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// simple actions
const OPEN_CLOSE_MENU = 'OPEN_CLOSE_MENU';

// request actions
const ASYNC_ACTION = 'ASYNC_ACTION';

// simple actions
export const openCloseMenu = createAction(OPEN_CLOSE_MENU);

// request actions
export const asyncActionExample = createAsyncThunk(ASYNC_ACTION, async () => {
  const response = await axios.get('http://urlExample');
  return response.data;
});


import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// simple actions
const ACTION_EXAMPLE = 'ACTION_EXAMPLE';

// request actions
const ASYNC_ACTION = 'ASYNC_ACTION';

// simple actions
export const actionExample = createAction(ACTION_EXAMPLE);

// request actions
export const asyncActionExample = createAsyncThunk(ASYNC_ACTION, async () => {
  const response = await axios.get('http://urlExample');
  return response.data;
});


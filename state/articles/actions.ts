import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ASYNC_ACTION = 'ASYNC_ACTION';

export const asyncActionExample = createAsyncThunk(ASYNC_ACTION, async () => {
  const response = await axios.get('http://urlExample');
  return response.data;
});

export const setIsSearching = createAction<{ value: boolean }>(
  'set_is_searching'
);

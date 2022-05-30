import {createAsyncThunk} from '@reduxjs/toolkit';

export const GetDataProduct = createAsyncThunk('getdata', async () => {
  return 'manh';
});

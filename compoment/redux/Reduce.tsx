import {createAsyncThunk} from '@reduxjs/toolkit';

export const GetDataUid = createAsyncThunk('getdata', async (vl: any) => {
  return vl;
});

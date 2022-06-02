import {createSlice} from '@reduxjs/toolkit';
import {getstate, initialStates} from '../inteface/InteFace';
import {GetDataUid} from './Reduce';

const initialState: initialStates = {
  dataUid: {
    uid: '1',
    email: '1',
  },
};

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(GetDataUid.fulfilled, (state: any, action: any) => {
      state.dataUid = action.payload;
    });
  },
});

export const dataUid = (state: getstate) => {
  return state.store.dataUid;
};

const TodoReducr = TodoSlice.reducer;

export default TodoReducr;

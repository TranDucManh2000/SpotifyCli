import {createSlice} from '@reduxjs/toolkit';
import {getstate, initialStates} from '../inteface/InteFace';
import {GetDataProduct} from './Reduce';

const initialState: initialStates = {
  datas: '',
};

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(GetDataProduct.fulfilled, (state, action) => {
      state.datas = action.payload;
    });
  },
});

export const dataNe = (state: getstate) => {
  return state.store.datas;
};

const TodoReducr = TodoSlice.reducer;

export default TodoReducr;

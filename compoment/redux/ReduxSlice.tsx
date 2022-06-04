import {createSlice} from '@reduxjs/toolkit';
import {getstate, initialStates} from '../inteface/InteFace';
import {GetDataMusic, GetDataUid} from './Reduce';

const initialState: initialStates = {
  dataUid: {
    uid: '1',
    email: '1',
  },
  dataMusic: {
    musics: [{album: '', date: '', img: '', music: '', singer: ''}],
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
    builder.addCase(GetDataMusic.fulfilled, (state: any, action: any) => {
      state.dataMusic = action.payload;
    });
  },
});

export const dataUid = (state: getstate) => {
  return state.store.dataUid;
};
export const dataMusic = (state: getstate) => {
  return state.store.dataMusic;
};

const TodoReducr = TodoSlice.reducer;

export default TodoReducr;

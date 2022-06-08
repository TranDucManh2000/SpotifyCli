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
  itemPlaySong: {
    album: '',
    date: '',
    img: '',
    music: '',
    singer: '',
  },
  currentTime: 0,
  allTime: 0,
};

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getDataCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    getDataAllTime: (state, action) => {
      state.allTime = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(GetDataUid.fulfilled, (state: any, action: any) => {
      state.dataUid = action.payload;
    });
    builder.addCase(GetDataMusic.fulfilled, (state: any, action: any) => {
      state.dataMusic = action.payload;
      state.itemPlaySong = action.payload.musics[0];
    });
  },
});

export const dataUid = (state: getstate) => {
  return state.store.dataUid;
};
export const dataMusic = (state: getstate) => {
  return state.store.dataMusic;
};
export const dataPlayItem = (state: getstate) => {
  return state.store.itemPlaySong;
};
export const dataCurrentTime = (state: getstate) => {
  return state.store.currentTime;
};
export const dataAllTime = (state: getstate) => {
  return state.store.allTime;
};
const TodoReducr = TodoSlice.reducer;

export const {getDataCurrentTime, getDataAllTime} = TodoSlice.actions;

export default TodoReducr;

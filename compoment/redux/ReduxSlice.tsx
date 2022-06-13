import {createSlice} from '@reduxjs/toolkit';
import {getstate, initialStates} from '../inteface/InteFace';
import {AddPlaysong, GetDataMusic, GetDataUid, GetDataUser} from './Reduce';

const initialState: initialStates = {
  dataUid: {
    uid: '1',
    email: '1',
  },
  dataMusic: {
    musics: [{album: '', date: '', img: '', music: '', singer: '', uid: ''}],
  },
  itemPlaySong: {
    album: '',
    date: '',
    img: '',
    music: '',
    singer: '',
    uid: '',
  },
  user: {
    email: '',
    uid: '',
    img: '',
  },

  allTime: 0,
};

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getDataAllTime: (state, action) => {
      state.allTime = action.payload;
    },
    playSongHome: (state, action) => {
      state.itemPlaySong = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(GetDataUid.fulfilled, (state: any, action: any) => {
      state.dataUid = action.payload;
    });
    builder.addCase(GetDataMusic.fulfilled, (state: any, action: any) => {
      state.dataMusic = action.payload;
      state.itemPlaySong = action.payload.musics[10];
    });
    builder.addCase(AddPlaysong.fulfilled, (state: any, action: any) => {
      state.itemPlaySong = action.payload;
    });
    builder.addCase(GetDataUser.fulfilled, (state: any, action: any) => {
      state.user = action.payload;
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

export const dataAllTime = (state: getstate) => {
  return state.store.allTime;
};
export const dataUser = (state: getstate) => {
  return state.store.user;
};
const TodoReducr = TodoSlice.reducer;

export const {getDataAllTime, playSongHome} = TodoSlice.actions;

export default TodoReducr;

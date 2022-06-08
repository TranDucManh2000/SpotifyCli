import {createAsyncThunk} from '@reduxjs/toolkit';

export const GetDataUid = createAsyncThunk('getdata', async (vl: any) => {
  return vl;
});
export const GetDataMusic = createAsyncThunk(
  'getdatamusic',
  async (vl: any) => {
    return vl;
  },
);
export const AddPlaysong = createAsyncThunk('addplaysong', async (vls: any) => {
  return vls;
});

// add data

// import firestore from '@react-native-firebase/firestore';
// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
//   params: {id: '37i9dQZF1DX4Wsb4d7NKfP', offset: '0', limit: '100'},
//   headers: {
//     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
//     'X-RapidAPI-Key': '4cb602686cmsh38055f8ad0d8ae8p16eb6fjsnfc5bbd1a638b',
//   },
// };
// axios
//   .request(options)
//   .then(function (response) {
//     console.log('re-----', response.data.items[1].track.preview_url);
//     var cc: any = response.data;
//     var a = [];
//     for (let i = 0; i < response.data.items.length; i++) {
//       a.push({
//         music: response.data.items[i].track.preview_url,
//         img: response.data.items[i].track.album.images[0].url,
//         album: response.data.items[i].track.album.name,
//         singer: response.data.items[i].track.name,
//         date: response.data.items[i].added_at,
//       });
//     }
//     console.log('a-----------', a);

//     firestore()
//       .collection('SpotifiMusic')
//       .doc('dbmusic')
//       .set({musics: a})
//       .then(() => {
//         console.log('User added!');
//       });
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

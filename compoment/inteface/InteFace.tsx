export interface getstate {
  store: {
    dataUid: {
      uid: any;
      email: any;
    };
    dataMusic: {
      musics: [
        {album: any; date: any; img: any; music: any; singer: any; uid: any},
      ];
    };
    itemPlaySong: {
      album: any;
      date: any;
      img: any;
      music: any;
      singer: any;
      uid: any;
    };
    currentTime: number;
    allTime: number;
  };
}
export interface initialStates {
  dataUid: {
    uid: any;
    email: any;
  };
  dataMusic: {
    musics: [
      {album: any; date: any; img: any; music: any; singer: any; uid: any},
    ];
  };
  itemPlaySong: {
    album: any;
    date: any;
    img: any;
    music: any;
    singer: any;
    uid: any;
  };
  currentTime: number;
  allTime: number;
}

export interface getstate {
  store: {
    dataUid: {
      uid: any;
      email: any;
    };
    dataMusic: {
      musics: [{album: any; date: any; img: any; music: any; singer: any}];
    };
  };
}
export interface initialStates {
  dataUid: {
    uid: any;
    email: any;
  };
  dataMusic: {
    musics: [{album: any; date: any; img: any; music: any; singer: any}];
  };
}

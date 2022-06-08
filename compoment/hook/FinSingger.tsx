import {useSelector} from 'react-redux';
import {dataMusic} from '../redux/ReduxSlice';

const FinSingger = async ({name}: any) => {
  const dataMusics = useSelector(dataMusic);
  const newmap: any = [];
  console.log('aaa-----------------', name);

  dataMusics.musics.map(vl => {
    if (vl.singer == name) {
      newmap.push(vl);
    }
  });

  const find = console.log('Find Enter', newmap);

  return find;
};

export default FinSingger;

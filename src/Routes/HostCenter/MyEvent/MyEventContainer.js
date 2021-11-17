import { useParams } from 'react-router-dom';
import MyEventPresenter from './MyEventPresenter';

const MyEventContainer = () => {
  const params = useParams();
  console.log(params);
  return <MyEventPresenter />;
};

export default MyEventContainer;

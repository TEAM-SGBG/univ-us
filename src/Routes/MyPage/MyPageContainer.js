import MyPagePresenter from './MyPagePresenter';

function MyPageContainer() {
  function goUserinfo() {
    console.log('go userinfo');
    window.location.assign('/userinfo');
  }

  return (
    <MyPagePresenter goUserinfo={goUserinfo} />
  );
}

export default MyPageContainer;

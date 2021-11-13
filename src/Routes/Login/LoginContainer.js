import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import LoginPresenter from './LoginPresenter';

function LoginContainer() {
  const dispatch = useDispatch();
  const history = useHistory();

  function GoHome() {
    alert('환영합니다!');
    console.log('Go Home');

    dispatch({
      type: 'LOGIN_REQUEST',
    });
    history.push('/home');
    // window.location.assign('/home');
  }

  return (
    <LoginPresenter GoHome={GoHome} />
  );
}

export default LoginContainer;

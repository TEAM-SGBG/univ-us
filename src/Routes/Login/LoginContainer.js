import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import LoginPresenter from './LoginPresenter';
import { LOGIN_REQUEST } from '../../reducers/user';

function LoginContainer() {
  const dispatch = useDispatch();
  const history = useHistory();

  function GoHome() {
    alert('환영합니다!');
    console.log('Go Home');

    dispatch({
      type: LOGIN_REQUEST,
    });
    const redirectPathName = history.location.state?.from.pathname;
    history.replace(redirectPathName ?? '/home');
  }

  return (
    <LoginPresenter GoHome={GoHome} />
  );
}

export default LoginContainer;

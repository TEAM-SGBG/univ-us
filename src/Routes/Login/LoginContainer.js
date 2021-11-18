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
  }

  return (
    <LoginPresenter GoHome={GoHome} redirectURL={history.location.state?.from.pathname ?? '/home'} />
  );
}

export default LoginContainer;

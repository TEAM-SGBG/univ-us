import { useHistory } from 'react-router';
import LoginPresenter from './LoginPresenter';

function LoginContainer() {
  const history = useHistory();

  // function GoHome() {
  //   alert('환영합니다!');
  //   console.log('Go Home');
  // }

  return (
    <LoginPresenter
      // GoHome={GoHome}
      redirectURL={history.location.state?.from.pathname ?? '/home'}
    />
  );
}

export default LoginContainer;

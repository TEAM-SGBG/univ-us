import { useHistory } from 'react-router';
import SignUpPresenter from './SignUpPresenter';

function SignUpContainer() {
  const history = useHistory();

  function GoHome() {
    alert('회원가입되었습니다.');
    history.push('/home');
  }

  return (
    <SignUpPresenter GoHome={GoHome} />
  );
}

export default SignUpContainer;

import SignUpPresenter from './SignUpPresenter';

function SignUpContainer() {
  function GoHome() {
    alert('회원가입되었습니다.');
    console.log('Go Home');
    window.location.assign('#/home');
  }

  return (
    <SignUpPresenter GoHome={GoHome} />
  );
}

export default SignUpContainer;

import LoginPresenter from './LoginPresenter';

function LoginContainer() {
  function GoHome() {
    alert('환영합니다!');
    console.log('Go Home');
    window.location.assign('#/home');
  }

  return (
    <LoginPresenter GoHome={GoHome} />
  );
}

export default LoginContainer;

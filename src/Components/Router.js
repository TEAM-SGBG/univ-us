import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import Home from '../Routes/Home';
import Interest from '../Routes/Interest';
import Login from '../Routes/Login';
import MyPage from '../Routes/MyPage';
import SignUp from '../Routes/SignUp';
import UserInfo from '../Routes/UserInfo';
import Category from '../Routes/Category';
import Event from '../Routes/Event';
import HostCenter from '../Routes/HostCenter';
import AuthRoute from './Auth/AuthRoute';
import Admin from '../Routes/Admin';

export default () => {
  const { isLoggedIn, loginLoading } = useSelector((state) => state.user);

  const renderLoginLoading = () => <div>로그인 중입니다.</div>;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/interest">
          <Interest />
        </Route>
        <Route exact path="/login">
          {/* eslint-disable-next-line no-nested-ternary */}
          {loginLoading ? renderLoginLoading() : isLoggedIn ? <Redirect to="/home" /> : <Login />}
        </Route>
        <AuthRoute authenticated={isLoggedIn} exact path="/mypage">
          <MyPage />
        </AuthRoute>
        <Route exact path="/signup">
          {isLoggedIn ? <Redirect to="/home" /> : <SignUp />}
        </Route>
        <AuthRoute authenticated={isLoggedIn} exact path="/userinfo">
          <UserInfo />
        </AuthRoute>
        <Route exact path="/category">
          <Category />
        </Route>
        <Route path="/events/:event_id">
          <Event />
        </Route>
        <Route path="/hostcenter">
          <HostCenter />
        </Route>
        <Redirect from="*" to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

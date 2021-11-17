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

export default () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/interest">
          <Interest />
        </Route>
        <Route exact path="/login">
          {isLoggedIn ? <Redirect to="/home" /> : <Login />}
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
        <Route path="/events">
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

import {
  // eslint-disable-next-line no-unused-vars
  HashRouter as BrowserRouter, Route, Switch, useLocation,
} from 'react-router-dom';
import { Redirect } from 'react-router';
import Home from '../Routes/Home';
import Interest from '../Routes/Interest';
import Login from '../Routes/Login';
import MyPage from '../Routes/MyPage';
import SignUp from '../Routes/SignUp';
import UserInfo from '../Routes/UserInfo';
import Category from '../Routes/Category';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/interest">
        <Interest />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/mypage">
        <MyPage />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/userinfo">
        <UserInfo />
      </Route>
      <Route exact path="/category">
        <Category />
      </Route>
      <Redirect from="*" to="/home" />
    </Switch>
  </BrowserRouter>
);

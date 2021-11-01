import {
  HashRouter as BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { Redirect } from 'react-router';
import Home from '../Routes/Home';
import Interest from '../Routes/Interest';
import Login from '../Routes/Login';
import MyPage from '../Routes/MyPage';
import SignUp from '../Routes/SignUp';
import UserInfo from '../Routes/UserInfo';
import Category from '../Routes/Category';
import Event from '../Routes/Event';

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
      <Route path="/events">
        <Event />
      </Route>
      <Redirect from="*" to="/home" />
    </Switch>
  </BrowserRouter>
);

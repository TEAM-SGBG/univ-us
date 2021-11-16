import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

const AuthRoute = ({ authenticated, children, location }) => (
  <Route>
    {authenticated ? children
      : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
  </Route>
);

export default AuthRoute;

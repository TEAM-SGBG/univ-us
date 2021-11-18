import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

const AuthRoute = ({
  authenticated, children, location, path, exact,
}) => (
  <Route exact={exact} path={path}>
    {authenticated ? children
      : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
  </Route>
);

export default AuthRoute;

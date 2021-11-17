import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

const AuthRoute = ({
  authenticated, children, location, path,
}) => (
  <Route exact path={path}>
    {authenticated ? children
      : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
  </Route>
);

export default AuthRoute;

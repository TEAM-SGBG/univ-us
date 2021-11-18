import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { AUTH_CHECK_REQUEST } from '../reducers/user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: AUTH_CHECK_REQUEST });
  }, []);

  return (
    <>
      <Helmet>
        <title>univ-us</title>
      </Helmet>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;

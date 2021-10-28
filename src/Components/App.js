import { Helmet } from 'react-helmet';
import Router from './Router';
import GlobalStyles from './GlobalStyles';

function App() {
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

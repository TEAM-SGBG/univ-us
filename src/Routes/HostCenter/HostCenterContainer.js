import {
  Route, Switch, useLocation, useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import HostCenterPresenter from './HostCenterPresenter';
import CreateChannelContainer from './CreateChannel';
import HostCenterHeader from '../../Components/HostCenter/HostCenterHeader';
import HostCenterFooter from '../../Components/HostCenter/HostCenterFooter';
import ChannelContainer from './Channel';
import useMediaQuery from '../../Hooks/useMediaQuery';
import CreateEventContainer from './CreateEvent';
import AuthRoute from '../../Components/Auth/AuthRoute';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isHome ? 'flex-start' : 'space-between')};
  height:100vh;
`;

function HostCenterContainer() {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const { isLoggedIn } = useSelector((state) => state.user);
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const history = useHistory();

  const createChannel = () => {
    history.push('/hostcenter/createchannel');
  };

  return (
    <Layout isHome={pathname.split('/').slice(-1)[0] === 'hostcenter'}>
      <HostCenterHeader />
      <Switch>
        <Route exact path={path}>
          <HostCenterPresenter
            isDesktop={isDesktop}
            history={history}
            createChannel={createChannel}
          />
        </Route>
        <AuthRoute authenticated={isLoggedIn} path={`${path}/createchannel`}>
          <CreateChannelContainer />
        </AuthRoute>
        <AuthRoute authenticated={isLoggedIn} path={`${path}/:id/createevent`}>
          <CreateEventContainer />
        </AuthRoute>
        <AuthRoute authenticated={isLoggedIn} path={`${path}/channel`}>
          <ChannelContainer />
        </AuthRoute>
        <Route>Not Found</Route>
      </Switch>
      <HostCenterFooter />
    </Layout>
  );
}

export default HostCenterContainer;

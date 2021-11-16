import {
  Route, Switch, useLocation, useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import HostCenterPresenter from './HostCenterPresenter';
import CreateChannelContainer from './CreateChannel';
import HostCenterHeader from '../../Components/HostCenter/HostCenterHeader';
import HostCenterFooter from '../../Components/HostCenter/HostCenterFooter';
import ChannelContainer from './Channel';
import useMediaQuery from '../../Hooks/useMediaQuery';
import CreateEventContainer from './CreateEvent';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isHome ? 'flex-start' : 'space-between')};
  height:100vh;
`;

function HostCenterContainer() {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
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
        <Route path={`${path}/createchannel`}>
          <CreateChannelContainer />
        </Route>
        <Route path={`${path}/:id/createevent`}>
          <CreateEventContainer />
        </Route>
        <Route path={`${path}/channel`}>
          <ChannelContainer />
        </Route>
        <Route>Not Found</Route>
      </Switch>
      <HostCenterFooter />
    </Layout>
  );
}

export default HostCenterContainer;

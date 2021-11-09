import {
  Route, Switch, useLocation, useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import HostCenterPresenter from './HostCenterPresenter';
import CreateChannelContainer from './CreateChannel';
import HostCenterHeader from '../../Components/HostCenter/HostCenterHeader';
import HostCenterFooter from '../../Components/HostCenter/HostCenterFooter';
import ChannelContainer from './Channel';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isHome ? 'flex-start' : 'space-between')};
  height:100vh;
`;

function HostCenterContainer() {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();

  return (
    <Layout isHome={pathname.split('/').slice(-1)[0] === 'hostcenter'}>
      <HostCenterHeader />
      <Switch>
        <Route exact path={path}>
          <HostCenterPresenter />
        </Route>
        <Route path={`${path}/createchannel`}>
          <CreateChannelContainer />
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

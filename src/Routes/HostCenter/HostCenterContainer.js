import { Route, Switch, useRouteMatch } from 'react-router-dom';
import HostCenterPresenter from './HostCenterPresenter';
import CreateChannelContainer from './CreateChannel';

function HostCenterContainer() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <HostCenterPresenter />
      </Route>
      <Route path={`${path}/createchannel`}>
        <CreateChannelContainer />
      </Route>
      <Route>Not Found</Route>
    </Switch>
  );
}

export default HostCenterContainer;

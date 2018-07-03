import { Router, Route, Switch,Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import asyncRoutes from './asyncRoutes';
axios.defaults.baseURL = "http://202.5.31.247:9999";
const RouterConfig = ({ history, app }) => {
 
  history = { ...history, app };
 
  return (
    <Router history={history}>
      <Switch >
        {
          asyncRoutes.map(({ path, exact, ...more }, key) => (
            <Route key={key} path={path} exact={exact} component={dynamic({
              app,
              ...more,
            })} />
          ))
        }
        <Route render={
          () => <Redirect to="/home" />
        } />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

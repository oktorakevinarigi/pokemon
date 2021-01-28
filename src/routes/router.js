import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import LayoutHeader from './Layout/Header'
import App from './App/App';
import Detail from './Detail/Detail'

const AppRoute = () => {
  return (
    <Router>
      <LayoutHeader />
      
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/detail/:id" exact>
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
};


export default AppRoute;

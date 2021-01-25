import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import App from './App/App'

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
        <Route path="/users">
          <p>User</p>
        </Route>
      </Switch>
    </Router>
  );
};


export default AppRoute;

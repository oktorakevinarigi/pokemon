import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LayoutHeader from './Layout/Header'
import App from './App/App';
import Detail from './Detail/Detail'
import MyPokemonList from './MyPokemonList/MyPokemonList'

const AppRoute = () => {
  return (
    <Router basename="/pokemon">
      <LayoutHeader />
      
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/myPokemontList" exact>
          <MyPokemonList />
        </Route>
      </Switch>
    </Router>
  );
};


export default AppRoute;

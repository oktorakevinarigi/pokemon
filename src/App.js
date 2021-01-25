import {Provider} from 'react-redux';

import stores from './store/store';
import AppRoute from './routes/router';

const App = () => {
  return (
    <Provider store={stores}>
      <AppRoute />
    </Provider>

  );
}

export default App;

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

import stores from './store/store';
import AppRoute from './routes/router';

let persistor = persistStore(stores);

const App = () => {
  return (
    <Provider store={stores}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoute />
      </PersistGate>
    </Provider>

  );
}

export default App;

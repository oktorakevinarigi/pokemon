import { all } from 'redux-saga/effects';
import App from '../routes/App/Redux/sa-App';

export default function* rootSaga(getState) {
  yield all([
    App()
  ]);
}
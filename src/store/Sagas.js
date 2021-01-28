import { all } from 'redux-saga/effects';
import App from '../routes/App/Redux/sa-App';
import Detail from '../routes/Detail/Redux/sa-Detail';

export default function* rootSaga(getState) {
  yield all([
    App(),
    Detail()
  ]);
}
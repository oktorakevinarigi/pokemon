import {useEffect} from 'react'
import {useDispatch} from 'react-redux';

import * as actApp from './Redux/ac-App'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actApp.fetchGetList())
  }, [dispatch])

  return (
      <div>
          <p>coba</p>
      </div>
  )
}

export default App

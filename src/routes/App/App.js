import {useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";

import * as actApp from './Redux/ac-App'

const App = () => {
  let history = useHistory();
  const dispatch = useDispatch()
  const list = useSelector(state => state.App.list);

  useEffect(() => {
    dispatch(actApp.fetchGetList())
  }, [dispatch])

  const onDetail = useCallback((id) => {
    history.push(`/detail/${id}?show=true`)
  }, [history])

  return (
    <div className="container">
      <main>
        <div className="content">
          {
            list.map((x, i) => (
              <div key={i} onClick={() => onDetail(i+1)} className="card">
                <div>
                  <img src={`https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`} alt="gambar pokemon" />
                </div>
                  <p>{x.name}</p>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default App

import {useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from "react-router-dom";
import {ArrowLeftOutlined} from '@ant-design/icons';

import * as actDetail from './Redux/ac-Detail'

const App = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  let { id } = useParams();
  const detail = useSelector(state => state.Detail.detail);

  useEffect(() => {
    dispatch(actDetail.fetchGetDetail(id))
  }, [dispatch, id])

  const onBack = useCallback(() => {
    history.goBack()
  }, [history])

  return (
    <div className="container">
      <main>
        <div className="detail-content">
          <div className="desc">
            <div onClick={onBack} className="detail-box-back">
              <ArrowLeftOutlined style={{fontSize:27}} />
              <div className="detail-back">Back</div>
            </div>
            <div className="detail-title">{detail && detail.name.toUpperCase()}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="boxImg">
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="Gambar pokemon" height="500" />
          </div>
        </div>
        <div className="boxSidebar">
          {
            detail &&
            detail.abilities.map((x, i)=> (
              <div key={i} className="sidebarRight">
                <p style={{fontWeight:'bold'}}>{x.ability.name}</p>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="abilities" height="150" width="150" />
              </div>
            ))
          }
        </div>
      </main>
      <div className="detail-title-header">Moves</div>
      <div style={{display:'flex', flexWrap:'wrap'}}>
        {
          detail &&
          detail.moves.map((x, i) => ( 
            <div key={i} className="detail-box-moves">{x.move.name}</div> 
          ))
        }
      </div>

      <div className="detail-title-header">Type</div>
      <div style={{display:'flex', flexWrap:'wrap'}}>
        {
          detail &&
          detail.types.map((x, i) => ( 
            <div key={i} className="detail-box-moves">{x.type.name}</div> 
          ))
        }
      </div>
    </div> 
  )
}

export default App

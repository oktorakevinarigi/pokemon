import {useEffect, useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory, useLocation} from "react-router-dom";
import {ArrowLeftOutlined} from '@ant-design/icons';
import {Button, Modal, Input, notification, Alert} from 'antd';

import * as actDetail from './Redux/ac-Detail'
import * as actMyPokemon from '../MyPokemonList/Redux/ac-MyPokemonList'

const App = () => {
  const history = useHistory();
  const {search} = useLocation();
  const dispatch = useDispatch();
  const {id} = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const detail = useSelector(state => state.Detail.detail);
  const list = useSelector(state => state.MyPokemonList.list);

  const resParam = new URLSearchParams(search);
  
  useEffect(() => {
    dispatch(actDetail.fetchGetDetail(id))
  }, [dispatch, id])

  const onBack = useCallback(() => {
    history.goBack()
  }, [history])

  const openNotification = (type) => {
    const description = (
      <Alert 
        message={type === 'success' ? 'Pokemon Caught' : 'Please try again to catch'} 
        type={type} showIcon 
      />
    );
    notification.open({
      key: 'updatable',
      message: type.toUpperCase(),
      description,
    });
  };

  const onModal = useCallback((type) => {
    if(type !== 'cancel'){
      if(Math.random() < 0.5){
        setIsVisible(prrev => !prrev)
      }else{
        openNotification('warning')
      }
    }else{
      setIsVisible(prrev => !prrev)
    }
    
  }, [setIsVisible])

  const onCatch = useCallback(() => {
    let tempList = [...list]
    tempList.push({
      id,
      name
    })
    dispatch(actMyPokemon.handleState('list',tempList))
    setIsVisible(prrev => !prrev)
    setName('')
    openNotification('success')
  }, [dispatch, list, name, id, setName])

  return (
    <div className="container">
      <Modal 
        title="Give the Pokemon a nickname" 
        visible={isVisible} 
        onOk={onCatch} 
        onCancel={() => onModal('cancel')}
        okButtonProps={{ disabled: name ? false : true }}
      >
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </Modal>

      <main>
        <div className="detail-content">
          <div className="desc">
            <div onClick={onBack} className="detail-box-back">
              <ArrowLeftOutlined style={{fontSize:27}} />
              <div className="detail-back">Back</div>
            </div>
            <div className="detail-title">{detail && detail.name.toUpperCase()}</div>
          </div>
          <div className="boxImg">
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="Gambar pokemon" height="500" width="400" />
            {
              resParam.get("show") === 'true' && 
              <Button type="primary" size="large" onClick={onModal}>Catch the Pokemon</Button>
            }
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
      <div className="detail-content-move">
        {
          detail &&
          detail.moves.map((x, i) => ( 
            <div key={i} className="detail-box-moves">{x.move.name}</div> 
          ))
        }
      </div>

      <div className="detail-title-header">Type</div>
      <div className="detail-content-type">
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

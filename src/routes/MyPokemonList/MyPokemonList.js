import {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";
import {Button, Modal} from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons';

import * as actMyPokemon from './Redux/ac-MyPokemonList'

const {confirm} = Modal;

const MyPokemonList = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const list = useSelector(state => state.MyPokemonList.list);

  const onDetail = useCallback((id) => {
    history.push(`/detail/${id}?show=false`)
  }, [history])

  const showConfirm = useCallback((id, name) => {
    confirm({
      title: 'Do you Want to delete these pokemon?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        let tempList = [...list]
        let resultFil = tempList.filter(x => x.id !== id || x.name !== name)
        dispatch(actMyPokemon.handleState('list', resultFil))
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }, [dispatch, list])

  return (
    <div className="container">
      <div className="detail-title-header">My Pokemon List</div>
      <main>
        <div className="content">
          {
            list.map((x, i) => (
              <div key={i} className="my-pokemon-card">
                <div onClick={() => onDetail(x.id)}>
                  <img src={`https://pokeres.bastionbot.org/images/pokemon/${x.id}.png`} alt="gambar pokemon" />
                </div>
                <p>{x.name}</p>
                <Button type="primary" size="large" danger onClick={() => showConfirm(x.id, x.name)}>Remove</Button>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  )
}


export default MyPokemonList
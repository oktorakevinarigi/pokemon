import {Link} from 'react-router-dom';
import pokemon from '../../Global/Image/pokemon.png'

const Header = () => {
  return (
    <header>
      <Link to="/"><img src={pokemon} alt="logo pokemon" /></Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">Take</Link>
      </div>
    </header>
  )
}

export default Header

import pokemon from '../../Global/Image/pokemon.png'
import './styles.scss'

const Header = () => {
  return (
    <header>
      <img src={pokemon} alt="logo pokemon" />
    </header>
  )
}

export default Header

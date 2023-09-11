import '../App.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Header =() => {
  return (
    <header>
        <div className='container header'>
          <Link to='/'><img src={logo} alt="" /></Link>
            <nav>
                <li>
                  <Link to='/pokemons'>Pokemons</Link>
                </li>
                <li>
                  <Link to='/types'>Types</Link>
                </li>
            </nav>
        </div>
    </header>
  )
}

export default Header

import '../App.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

function myFunction() {
  var x = document.getElementsByClassName("navbar")[0];
  var y = document.getElementsByClassName("menu-burger")[0];

  if (x.className === "navbar") {
      x.className += " responsive";
      y.innerHTML = "&#10005;"; // Change burger to cross
  } else {
      x.className = "navbar";
      y.innerHTML = "&#9776;"; // Change cross back to burger
  }
}

const Header =() => {
  return (
    <header>
        <div className='container navbar'>
          <Link to='/'><img src={logo} alt="" /></Link>
            <nav>
                <li>
                  <Link to='/pokemons'>Pokemons</Link>
                </li>
                <li>
                  <Link to='/types'>Types</Link>
                </li>
                <li>
                    <Link className="menu-burger" onClick={myFunction}>☰</Link>
                </li>
            </nav>
        </div>
    </header>
  )
}

export default Header

import '../App.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

function myFunction() {
  var x = document.getElementsByClassName("topnav")[0];
  var y = document.getElementsByClassName("menu-burger")[0];

  if (x.className === "topnav") {
      x.className += " responsive";
      y.innerHTML = "&#10005;"; // Change burger to cross
  } else {
      x.className = "topnav";
      y.innerHTML = "&#9776;"; // Change cross back to burger
  }
}

const Header =() => {
  return (
    <header className='container'>
      <div className='navbar'>
        <Link to='/'><img src={logo} alt="" /></Link>
        <div id='responsive'>
          <Link className="menu-burger" onClick={myFunction}>☰</Link>
        </div>

        <ul className='topnav' id='topNav'>
            <li>
              <Link to='/pokemons'>Pokemons</Link>
            </li>
            <li>
              <Link to='/types'>Types</Link>
            </li>
        </ul>
      </div>
    </header>
  )
}

export default Header

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COmponents
import Header from './components/Header';

//Pages
import Pokemons from './pages/Pokemons';
import Home from './pages/Home';
import Types from './pages/Types';
import Pokemon from './pages/Pokemon';
import Type from './pages/Type';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path='/pokemons/:name' element={<Pokemon />}  />
        <Route path="/types" element={<Types />} />
        <Route path="/types/:type" element={<Type />}/>
      </Routes>
    </Router>
  )
}

export default App

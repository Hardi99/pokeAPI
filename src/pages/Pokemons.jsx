import '../App.css';
// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Pokemons =() => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
            console.log(response.data);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
          console.log(error.response); // contrairement au error.message d'express
        }
    };
    fetchData();
    }, []);

    return isLoading ? (
      <span>En cours de chargement...</span>
    ) : (
      <div className='container'>
        <ul className='list'>
            {data.results.map((pokemon, index) => {
                return (
                    <Link key={index} to={`/pokemons/${pokemon.name}`}>
                        <div>
                            <p>{pokemon.name}</p>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt="" />
                        </div>
                    </Link>
                );
            })}
        </ul>
      </div>
    );
}

export default Pokemons

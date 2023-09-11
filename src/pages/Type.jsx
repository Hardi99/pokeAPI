import '../App.css';
// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Type =() => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const { type } = useParams();
  
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
            //console.log(response.data);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
          console.log(error.response); // contrairement au error.message d'express
        }
    };
    fetchData();
    }, [type]);

    return isLoading ? (
      <span>En cours de chargement...</span>
    ) : (
      <div className='container'>
        <h1>Type : {type}</h1>
        <ul className='list'>
            {data.pokemon.map((typedPokemon, index) => {
                let string = typedPokemon.pokemon.url
                let data = string.split('/');
                //console.log(string);
                //console.log(data);
                return (
                    <div key={index}>
                        <p>{typedPokemon.pokemon.name}</p>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data[6]}.png`} alt="" />
                    </div>
                );
            })}
        </ul>
      </div>
    );
}

export default Type

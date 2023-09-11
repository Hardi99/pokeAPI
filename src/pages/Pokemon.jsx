import '../App.css';
// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const Pokemon =() => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const { name } = useParams();
  
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            console.log(response.data);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
          console.log(error.response); // contrairement au error.message d'express
        }
    };
    fetchData();
    }, [name]);

    return isLoading ? (
      <span>En cours de chargement...</span>
    ) : (
      <div className='container'>
        <ul>
            <div>
                <p>{name}</p>
                <img src={data.sprites.front_default} alt="" />
            </div>
            <nav className='types-div'>
                {data.types.map((type, index) => {
                    return (
                        <Link key={index} to={`/types/${type.type.name}`}>
                            <div>{type.type.name}</div>
                        </Link>
                    )
                })}
            </nav>
        </ul>
      </div>
    );
}

export default Pokemon

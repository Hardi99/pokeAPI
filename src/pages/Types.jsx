import '../App.css';
// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Types =() => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://pokeapi.co/api/v2/type");
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
      <div className='container'>
        <span>En cours de chargement...</span>
      </div>
    ) : (
      <div className='container'>
        <ul className='list'>
            {data.results.map((type, index) => {
                return (
                    <Link key={index} to={`/types/${type.name}`}>
                        <div key={index}>
                            <p>{type.name}</p>
                        </div>
                    </Link>
                );
            })}
        </ul>
      </div>
    );
}

export default Types

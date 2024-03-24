import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import axios from "axios";

const PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon details', error);
      }
    };

    if (name) {
      fetchData();
    }
  }, [name]);

  return (
    <div className="deteils">
      {pokemonDetails && (
        <>
          <h2>{pokemonDetails.name}</h2>
          <Cards pokemonData={[pokemonDetails]} />
        </>
      )}
    </div>
  );
};

export default PokemonDetails;

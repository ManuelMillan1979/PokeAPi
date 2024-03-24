import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Form from 'react-bootstrap/Form';

const Pokemons = () => {
  const { pokemons, selectedPokemons, setSelectdPokemons } = useContext(PokemonContext);
  const navigate = useNavigate();

  const gotoDetails = () => {
    if (selectedPokemons) {
      navigate(`/pokemons/${selectedPokemons}`);
    } else {
      Swal.fire("Selecciona un pokemon");
    }
  };

  return (
    <>
      <div className="pokemons">
        <h1>Selecciona un pokémon</h1>
        <section>
          <div className="select">
          <Form.Select className="w-75 m-4"
            value={selectedPokemons}
            onChange={({ target }) => setSelectdPokemons(target.value)}
          >
            <option value="" disabled>
              Select a pokémon
            </option>
            {pokemons.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Form.Select>
          </div>
          <article>
            <button className="btn btn-secondary m-3" onClick={gotoDetails}>
              Ver detalles
            </button>
          </article>
        </section>
      </div>
    </>
  );
};

export default Pokemons;

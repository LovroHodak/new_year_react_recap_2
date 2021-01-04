import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonDetail(props) {
  const [pokemon, setPokemon] = useState({});

  const getData = () => {
    console.log(props.match.params.pokemonId);
    let id = props.match.params.pokemonId;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
            console.log(response.data);
            setPokemon(response.data);
        });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("did update");
    if (pokemon.id !== props.match.params.pokemonId) {
      getData();
    }
  });

  return (
    <div>
      <h3>Name: {pokemon.name}.</h3>
      <h3>Height: {pokemon.height} m.</h3>
      <h3>Weight: {pokemon.weight} kg.</h3>
    </div>
  );
}

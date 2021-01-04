import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Navigator from './components/Navigator'
import {Route, Link, Switch} from 'react-router-dom'
import PokemonDetail from './components/PokemonDetail'
import About from './components/About'

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      //console.log(response.data.results)
      setPokemons(response.data.results);
    });
  }, []);

  return (
    <div>
      <Navigator />
      <div className="App">
        {pokemons.map((pokemon, i) => {
          return (
            <Link to={`/pokemon/${i+1}`}>
              <p key={i}> {pokemon.name} </p>
            </Link>
          );
        })}
      </div>
      <div>
      <Switch>
        <Route path='/pokemon/:pokemonId' component={PokemonDetail} />
        <Route path='/about' component={About} />
      </Switch>
      </div>
    </div>
  );
}

export default App;

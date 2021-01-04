1) index.js - BrowserRouter
2) App.js - useState, useEffect && map all pokemons in App.js
3) App.js - Route-path and Link to PokemonDetail
4) PokemonDetail - created newState based on props.match.paramas from App.js and based on that match i        fetched data again from pokemonAPI but this time specific pokemon so the state is object not an array anymore (so i have props from App and based on those props I get state from API)
5) PokemonDetail - put axios.get() out of useEffect into seperate function getData(). Then I call that function in componentDidiMount(useEffect+[]). Reason why i did it is because we want to be able to change our state with every new click on new pokemon. So in componentDidUpdate(useEffect) i say that if new id is clicked create newState for that pokemon
6) App - added switch so i can have multiple routes
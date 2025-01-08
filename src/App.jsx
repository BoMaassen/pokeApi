import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";

function App() {
    const [pokemon, setPokemon] = useState({});
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function fetchPokemon() {
            toggleError(false);
            try {
                const result = await axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur");
                console.log(result.data);
                console.log(result.data.sprites.front_default);
                setPokemon(result.data);
            } catch (e) {
                console.log("er ging iets fout, probeer het opniew! " + e);
                toggleError(true);
            }
        }

        fetchPokemon()
    }, []);


    return (
        <>
            <h1>Pokemon</h1>
            {error ? <h2>Er ging iets fout met het ophalen probeer opniew!</h2> :
                <PokemonCard name={pokemon.name} img={pokemon.sprites?.front_default} moves={pokemon.moves?.length} weight={pokemon.weight} abilities={pokemon.abilities}/>
            }

        </>
    )
}

export default App

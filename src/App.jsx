import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";

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
            {error ? <h2>Er ging iets fout met het ophalen probeer opniew!</h2> : <article>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites?.front_default} alt='dito'/>
                <h3>Moves:{pokemon.moves?.length}</h3>
                <h3>Weight:{pokemon.weight}</h3>
                <h3>Albilities:</h3>
                <ul>{pokemon.abilities?.map((poke)=>{
                    return ( <li key={poke.ability.name}>
                    <p>{poke.ability.name} </p>
                    </li>
                    )
                } )}</ul>
            </article>}

        </>
    )
}

export default App

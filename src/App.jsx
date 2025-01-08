import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard.jsx";

function App() {
    const [pokemon, setPokemon] = useState({});
    const [pokemonList, setPokemonList] = useState([]);
    const [error, toggleError] = useState(false);

    useEffect(() => {


        async function fetchPokemonList() {
            toggleError(false);
            try {
                const result = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
                console.log(result.data.results);
                setPokemonList(result.data.results);

            } catch (e) {
                console.log("er ging iets fout, probeer het opniew! " + e);
                toggleError(true);
            }
        }

        fetchPokemonList();
    }, []);



    useEffect(() => {
        async function fetchPokemon() {
            toggleError(false);
                try {
                    const result = await axios.get(pokemonList[1].url)
                    console.log(result.data);
                    setPokemon(result.data);
                } catch (e) {
                    console.log("er ging iets fout " + e);
                    toggleError(true);
                }


        }

        fetchPokemon();
    }, [pokemonList]);


    return (
        <>
            <h1>Pokemon</h1>


            {/*{error ? <h2>Er ging iets fout met het ophalen probeer opniew!</h2> :*/}
                <PokemonCard name={pokemon.name} img={pokemon.sprites?.front_default} moves={pokemon.moves?.length} weight={pokemon.weight} abilities={pokemon.abilities}/>


            {/*<ul>{pokemonList.map((pokemons)=>{*/}
            {/*    return(<li key={pokemons.name}>*/}
            {/*        <p>{pokemons.name}</p>*/}
            {/*        <PokemonCard name={pokemon.name} img={pokemon.sprites?.front_default} moves={pokemon.moves?.length} weight={pokemon.weight} abilities={pokemon.abilities}/>*/}
            {/*    </li>)*/}
            {/*}  )}*/}
            {/*</ul>*/}



        </>
    )
}

export default App

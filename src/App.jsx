import './App.css'
import axios from "axios";
import {useState} from "react";

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [error, toggleError] = useState(false);

    async function fetchPokemon(){
        toggleError(false);
        try {
            const result = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
            console.log(result.data);
            setPokemon(result.data);
        }catch (e){
            console.log("er ging iets fout, probeer het opniew! " + e);
            toggleError(true);
        }
    }

    fetchPokemon()

  return (
    <>
      <h1>Gotta catch em all!</h1>


    </>
  )
}

export default App

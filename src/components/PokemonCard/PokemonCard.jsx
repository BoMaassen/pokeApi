function PokemonCard({name, img, moves, weight, abilities}) {
    return (
        <article>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <h3>Moves:{moves}</h3>
            <h3>Weight:{weight}</h3>
            <h3>Albilities:</h3>
            <ul>{abilities?.map((poke) => {
                return (<li key={poke.ability.name}>
                        <p>{poke.ability.name} </p>
                    </li>
                )
            })}
            </ul>
        </article>
    )

}

export default PokemonCard;
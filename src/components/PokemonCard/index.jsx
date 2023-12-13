import { PokemonCardDiv } from "./styles"

export default function PokemonCard({ pokemons }) {
    return (
        <>
            {pokemons.map((pokemon) => {
                return (
                    <div key={pokemon.name}>
                        <PokemonCardDiv className="pokemonCardDiv">
                            <div className="cabecalho">
                                <div className="topInfo">
                                    <p>#{pokemon.id.toString().padStart(4, '0')}</p>
                                    <h3>{pokemon.name}</h3>
                                </div>
                                <div className="imagem">
                                    <img src={pokemon.sprites.front_default ? pokemon.sprites.front_default : pokemon.sprites.front_shiny} alt={pokemon.name} />
                                </div>
                            </div>
                            <div className="rodape">
                                <div className="pokemonType">
                                    {pokemon.types.map((type, index) => {
                                        return (
                                            <h5 key={index}>{type.type.name}</h5>
                                        )
                                    })}

                                </div>
                                <h4>Sobre</h4>
                                <p>Altura: {pokemon.height}</p>
                                <p>Peso: {pokemon.weight}</p>
                                <a href="#">Ver mais</a>
                            </div>
                        </PokemonCardDiv>
                    </div>

                )
            })}



        </>
    )
}
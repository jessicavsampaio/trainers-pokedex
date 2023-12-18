import { Link } from "react-router-dom"
import { PokemonCardDiv } from "./styles"

export default function PokemonCard({ pokemons }) {
    return (
        <>
            {pokemons.map((pokemon, index) => {
                return (
                    <div key={index}>
                        <PokemonCardDiv>
                            <div className="card">
                                <div className={`cabecalho ${pokemon.types[0].type.name}`}>
                                    <div className="topInfo">
                                        <p>#{pokemon.id.toString().padStart(4, '0')}</p>
                                        <h3>{pokemon.name}</h3>
                                    </div>
                                    <div className="imagem">
                                        <img src={pokemon.sprites.other.home.front_default ? pokemon.sprites.other.home.front_default : pokemon.sprites.front_default || pokemon.sprites.front_shiny || pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
                                    </div>
                                </div>
                                <div className="rodape">
                                    <div className="pokemonType">
                                        {pokemon.types.map((type, index) => {
                                            return (
                                                <div className={type.type.name} key={index}>
                                                    <h5>{type.type.name}</h5>
                                                </div>
                                            )
                                        })}

                                    </div>
                                    <div>
                                        <Link to={`/details/${pokemon.id}`}>
                                            Ver mais
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </PokemonCardDiv>
                    </div>
                )
            })}



        </>
    )
}
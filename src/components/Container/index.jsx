import { ContainerDiv } from "./styles";
import PokemonCard from "../PokemonCard";

export default function Container({pokemons}) {


    return (
        <ContainerDiv>
            <div className="pokemonList">
                {pokemons.length > 0 ? (<PokemonCard pokemons={pokemons} />) : <p>O Pokémon/Tipo pesquisado não existe na Pokedéx.</p>}
            </div>
        </ContainerDiv>
    )
}
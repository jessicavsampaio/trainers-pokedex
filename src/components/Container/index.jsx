import { ContainerDiv } from "./styles";
import PokemonCard from "../PokemonCard";
import SkeletonCard from "../SkeletonCard";

export default function Container({pokemons, isLoading}) {


    return (
        <ContainerDiv>
            <div className="pokemonList">
                {isLoading ? 
                Array(1).fill(null).map((_, index) => <SkeletonCard key={index} />)
                : pokemons.length === 0 ?
                <p>O Pokémon/Tipo pesquisado não existe na Pokedéx.</p>
                : (<PokemonCard pokemons={pokemons} />)}
            </div>
        </ContainerDiv>
    )
}
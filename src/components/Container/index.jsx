import { ContainerDiv } from "./styles";
import PokemonCard from "../PokemonCard";

export default function Container({pokemons}) {


    return (
        <ContainerDiv>
            <div className="pokemonList">
                <PokemonCard pokemons={pokemons} />
            </div>
        </ContainerDiv>
    )
}
import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";
import { ContainerDiv } from "./styles";
import axios from "axios";

export default function Container() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {

        var urlsPokemons = []
        for (let i = 1; i < 1017; i++) {
            urlsPokemons.push(`https://pokeapi.co/api/v2/pokemon/${i}`)

        }
        for (let i = 10001; i < 10275; i++) {
            urlsPokemons.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        console.log(urlsPokemons)

        const requests = urlsPokemons.map(url => axios.get(url)) //array com promises de cada url

        Promise.all(requests)
            .then((response) => {
                const data = response.map(res => res.data)
                setPokemons(data)
                console.log(data)
            })

    }, [])

    return (
        <ContainerDiv>
            <PokemonCard pokemons={pokemons} />
        </ContainerDiv>
    )
}
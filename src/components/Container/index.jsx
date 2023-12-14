import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";
import { ContainerDiv } from "./styles";
import axios from "axios";

export default function Container() {
    const baseURL = 'https://pokeapi.co/api/v2'
    const offset = 30
    const [pokemons, setPokemons] = useState([])
    const [counter, setCounter] = useState(1)
    const [limit, setLimit] = useState(30)
    const [loading, setLoading] = useState(false)
    const [stopElement, setStopElement] = useState(114)

    useEffect(() => {
        getPokemons()
    }, [])

    async function getPokemons() {
        if (loading) return

        setLoading(true)

        var urlsPokemons = []

        if (stopElement < 1021) {
            for (let i = counter; i <= limit; i++) {
                if(i > 1017) {
                    continue
                }
                urlsPokemons.push(`${baseURL}/pokemon/${i}`)
            }
            setLimit(limit + offset)
            setCounter(counter + offset)
            console.log(counter, limit, stopElement)
            
            setStopElement(limit + 1)
        } else {
            for (let i = 10001; i <= 10275; i++) {
                urlsPokemons.push(`${baseURL}/pokemon/${i}`)
            }
        }


        var promises = urlsPokemons.map(url => axios.get(url))

        Promise.all(promises)
            .then((requests) => {
                const data = requests.map(res => res.data)
                setPokemons([...pokemons, ...data])
                console.log([...pokemons, ...data])
                setLoading(false)
            })
    }

    return (
        <ContainerDiv>
            <div className="pokemonList">
                <PokemonCard pokemons={pokemons} />
            </div>
            {pokemons.length >= 1292 ? (
                <p></p>
            ) : (
                <button onClick={getPokemons}>+ Carregar mais Pokémons</button>
            )}
        </ContainerDiv>
    )
}
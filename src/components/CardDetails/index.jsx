import { useEffect, useState } from "react"
import { CardDetailsDiv } from "./styles"
import axios from "axios"
import { Link } from "react-router-dom"
import { BiLeftArrowAlt } from "react-icons/bi";

export default function CardDetails({ pokemonId }) {
    const [pokemonName, setPokemonName] = useState()
    const [pokemonImage, setPokemonImage] = useState()
    const [pokemonChainNames, setPokemonChainNames] = useState([])
    const [pokemonChainImg, setPokemonChainImg] = useState([])

    async function getURLs() {
        await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
            .then((response) => {
                setPokemonName(response.data.name)
                getPokemonEvolutionChain(response.data.evolution_chain.url)
            })
            .catch((error) => {
                console.log('Erro ao buscar URL da cadeia de evolução.', error)
            })
    }

    async function getImage() {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((response) => {
                setPokemonImage(response.data?.sprites.other.home.front_default ? response.data?.sprites.other.home.front_default : response.data?.sprites.front_default || response.data?.sprites.front_shiny || response.data?.sprites.other["official-artwork"].front_default)
            })
            .catch((error) => {
                setPokemonImage("Erro ao encontrar imagem do Pokémon clicado.", error)
            })
    }

    async function getPokemonEvolutionChain(URL) {
        const pokemonChainIds = []
        await axios.get(URL)
            .then((response) => {
                const chain = response.data?.chain

                if (chain) {
                    pokemonChainIds.push(chain.species?.name)
                    const evolvesTo = chain.evolves_to[0]
                    if (evolvesTo) {
                        pokemonChainIds.push(evolvesTo.species?.name)
                        const nextEvolvesTo = evolvesTo.evolves_to[0]
                        if (nextEvolvesTo) {
                            pokemonChainIds.push(nextEvolvesTo.species?.name)
                        }
                    }
                }
                setPokemonChainNames(pokemonChainIds)
                getPokemonimages(pokemonChainIds)
            })
            .catch((error) => {
                console.log('Erro ao buscar Pokémons da cadeia de evolução.', error)
            })
    }

    async function getPokemonimages(pokemonChainIds) {
        const pokemonChainImg = await Promise.all(
            pokemonChainIds.map(async (pokemon) => {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                return response.data?.sprites.other.home.front_default ? response.data?.sprites.other.home.front_default : response.data?.sprites.front_default || response.data?.sprites.front_shiny || response.data?.sprites.other["official-artwork"].front_default
            })
        )
        setPokemonChainImg(pokemonChainImg)
    }

    useEffect(() => {
        getURLs()
    }, [pokemonId])

    useEffect(() => {
        if (pokemonName) {
            getImage()
        }
    })

    return (
        <CardDetailsDiv>
            <div className="details">
                <Link to={`/`}>
                    <div>
                        <BiLeftArrowAlt />
                        <p>Voltar</p>
                    </div>
                </Link>
                <div className="cardInfo">
                    <div className="image">
                        <h2>{pokemonName}</h2>
                        <img src={pokemonImage} />
                    </div>
                    <div className="infos">
                        <h3>Cadeia evolutiva:</h3>
                        <div>
                            <div className="pokemonChain">
                                {pokemonChainImg.map((image, index) => {
                                    return (
                                        <img key={index} src={image} />
                                    )
                                })}
                            </div>

                            <div className="pokemonChainNames">
                                {pokemonChainNames.map((name, index) => {
                                    return (
                                        <p key={index}>{name}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardDetailsDiv>
    )
}

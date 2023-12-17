import Container from '../components/Container'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const baseURL = 'https://pokeapi.co/api/v2'
  const [pokemons, setPokemons] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState([])


  useEffect(() => {
    allPokemons()
  }, [])

  const pokemonFilter = (value, type) => {
    if(value === "") {
      setFilteredPokemons(pokemons)
      return
    }

    function isTheSameType(pokemon) {
      const type0 = pokemon.types && pokemon.types[0] && pokemon.types[0].type
      const type1 = pokemon.types && pokemon.types[1] && pokemon.types[1].type
      
      return type0.name.toLowerCase().includes(value.toLowerCase()) ||
        (type1 && type1.name.toLowerCase().includes(value.toLowerCase()))
    }
    
    let newFilteredPokemons = []
    switch (type) {
      case 'nome':
        newFilteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(value.toLowerCase()))
        break
      case 'tipo':
        newFilteredPokemons = pokemons.filter(isTheSameType)
        break
      case 'nome-tipo':
        newFilteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(value.toLowerCase())).concat(pokemons.filter(isTheSameType))
        break
      default:
        break
    }
    setFilteredPokemons(newFilteredPokemons)
  }

  async function allPokemons() {
    let urlsPokemons = []

    for (let i = 1; i <= 1017; i++) {
      urlsPokemons.push(`${baseURL}/pokemon/${i}`)
    }

    var promises = urlsPokemons.map(url => axios.get(url))

    Promise.all(promises)
      .then((requests) => {
        const data = requests.map(res => res.data)
        setPokemons(data)
        setFilteredPokemons(data)
      })
      .catch((error) => {
        console.log("Erro ao buscar todos os Pokémons", error)
      })
  }

  return (
    <>
      <NavBar />
      <SearchBar pokemonFilter={pokemonFilter} />
      <Container pokemons={filteredPokemons} />
    </>
  )
}

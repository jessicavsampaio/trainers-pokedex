import Container from '../components/Container'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const baseURL = 'https://pokeapi.co/api/v2'
  const [pokemons, setPokemons] = useState([])


  useEffect(() => {
    pokemonFilter("")
  }, [])

  const pokemonFilter = (value, type) => {
    if(value === "") {
      allPokemons()
      return
    }

    function isTheSameType(pokemon) {
      const type0 = pokemon.types && pokemon.types[0] && pokemon.types[0].type
      const type1 = pokemon.types && pokemon.types[1] && pokemon.types[1].type
      
      return type0.name.toLowerCase().includes(value.toLowerCase()) ||
        (type1 && type1.name.toLowerCase().includes(value.toLowerCase()))
    }
    
    let filteredPokemons = []
    switch (type) {
      case 'nome':
        filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(value.toLowerCase()))
        break
      case 'tipo':
        filteredPokemons = pokemons.filter(isTheSameType)
        break
      case 'nome-tipo':
        filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(value.toLowerCase())).concat(pokemons.filter(isTheSameType))
        break
      default:
        break
    }
    setPokemons(filteredPokemons)
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
      })
      .catch((error) => {
        console.log("Erro ao buscar todos os Pokémons", error)
      })

  }


  // async function getPokemons() {
  //   if (loading) return

  //   setLoading(true)

    // let urlsPokemons = []

    // if (stopElement < 1021) {
    //   for (let i = counter; i <= limit; i++) {
    //     urlsPokemons.push(`${baseURL}/pokemon/${i}`)
    //   }
    //   setLimit(limit + offset)
    //   setCounter(counter + offset)
    //   console.log(counter, limit, stopElement)

    //   setStopElement(limit + 1)
    // }

    // var promises = urlsPokemons.map(url => axios.get(url))

    // Promise.all(promises)
    //   .then((requests) => {
    //     const data = requests.map(res => res.data)
    //     setPokemons([...pokemons, ...data])
    //     console.log("pokemons iniciais:", [...pokemons, ...data].length)
    //     setLoading(false)
    //   })
  // }


  return (
    <>
      <NavBar />
      <SearchBar pokemonFilter={pokemonFilter} />
      <Container pokemons={pokemons} />
      {/* {pokemons.length >= 1017 ? (
        <p></p>
      ) : (
        <button onClick={getPokemons}>+ Carregar mais Pokémons</button>
      )} */}
    </>
  )
}

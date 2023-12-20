import Container from '../components/Container'
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { TeamProvider } from '../contexts/teamContext'

const teamKey = "team"

export default function Home() {
  const baseURL = 'https://pokeapi.co/api/v2'
  const [pokemons, setPokemons] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState([])
  const [team, setTeam] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const loadTeamPokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(teamKey)) || []
    setTeam(pokemons)
  }

  useEffect(() => {
    setIsLoading(true)
    allPokemons()
    getPokemonByPage(20,0)
  }, [])

  useEffect(() => {
    loadTeamPokemons()
  }, [])

  async function getPokemonByPage(limit, offset) {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => {
      console.log(response.data.results)
    })
  }

  const pokemonFilter = (value, type) => {
    if (value === "") {
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
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log("Erro ao buscar todos os Pokémons", error)
      })
  }

  const updateTeamPokemons = (name) => {
    const updatedTeam = [...team]
    const isThisPokemonInTeam = updatedTeam.includes(name)

    if(isThisPokemonInTeam) {
      const teamIndex = team.indexOf(name)
      updatedTeam.splice(teamIndex, 1)
    } else {
      if(updatedTeam.length < 5) {
        updatedTeam.push(name)
      } else {
        alert("Time Cheio! O time já possui 5 Pokémons.")
      }
    }
    window.localStorage.setItem(teamKey, JSON.stringify(updatedTeam))
    setTeam(updatedTeam)
  }

  return (
    <>
      <TeamProvider value={{ teamPokemons: team, updateTeamPokemons: updateTeamPokemons }}>
        <NavBar />
        <SearchBar pokemonFilter={pokemonFilter} />
        {team.length !== 0 ? (<div style={{textAlign: "center", margin: "10px", backgroundColor: "#e1e1e1", padding: "10px"}}>
          <h3>Time atual:</h3>
          <div>
            {team.map((pokemon, index) => (
              <p key={index} style={{textTransform: "capitalize"}}>{index+1}: {pokemon} </p>
            ))}
          </div>
        </div>) : <p></p>}
    
        <Container pokemons={isLoading ? Array(10).fill(null) : filteredPokemons} isLoading={isLoading} />
      </TeamProvider>
    </>
  )
}

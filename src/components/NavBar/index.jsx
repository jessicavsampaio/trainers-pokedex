import { Link } from 'react-router-dom'
import { NavBarDiv } from './styles'
import { useContext } from 'react'
import TeamContext from '../../contexts/teamContext'

export default function NavBar() {
  const {teamPokemons} = useContext(TeamContext)

  return (
    <NavBarDiv>
        <div>
            <Link to={`/`}><img src="../../../assets/pokemon.png" alt='Pokemon logo' /></Link>
        </div>

        <nav>
            <ul>
            <Link to={`/`}>Home</Link>
            <a href='#'>Time <span>{teamPokemons.length}</span></a>
            </ul>
        </nav>
    </NavBarDiv>
  )
}

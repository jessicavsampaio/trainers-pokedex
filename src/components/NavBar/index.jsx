import { Link } from 'react-router-dom'
import { NavBarDiv } from './styles'

export default function NavBar() {
  return (
    <NavBarDiv>
        <div>
            <Link to={`/`}><img src="../../../assets/pokemon.png" /></Link>
        </div>

        <nav>
            <ul>
                <li>Ver todos</li>
                <li>Visualizar time</li>
            </ul>
        </nav>
    </NavBarDiv>
  )
}

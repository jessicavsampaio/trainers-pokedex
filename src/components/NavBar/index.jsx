import { NavBarDiv } from './styles'

export default function NavBar() {
  return (
    <NavBarDiv>
        <div>
            <a><img src="../../../assets/pokemon.png" /></a>
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

import { NavBarDiv } from './styles'

export default function NavBar() {
  return (
    <NavBarDiv>
        <div>
            <a><img src='../../../public/assets/pokemon.png' /></a>
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

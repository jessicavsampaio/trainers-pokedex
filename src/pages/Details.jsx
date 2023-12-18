import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar";
import CardDetails from "../components/CardDetails";

export default function Details() {
  const { pokemonId } = useParams()

  return (
    <>
      <NavBar />
      

      <CardDetails pokemonId={pokemonId} />


    </>
  )
}

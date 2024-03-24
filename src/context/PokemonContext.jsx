import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const PokemonContext = createContext();

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150";

const PokemonProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([])
    const [selectedPokemons, setSelectdPokemons] = useState("")

    const getPokemons = async () => {
        try {
            const res = await axios.get(url)
            if (!res) {
                throw new Error("Error en la api")
            }

            setPokemons(res.data.results)
            console.log(res.data.results)
        } catch (error) {
            console.log(error.message)
        }

    }

    useEffect(() => {
        getPokemons()
    }, [])

return (
    <PokemonContext.Provider value={{pokemons, setPokemons, selectedPokemons, setSelectdPokemons}} >
        {children}
    </PokemonContext.Provider>
)
}
export default PokemonProvider

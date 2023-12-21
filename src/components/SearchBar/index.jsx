import { useState } from "react";
import { SearchBarDiv } from "./styles";

export default function SearchBar({ pokemonFilter }) {
    const [searchValue, setSearchValue] = useState('')
    const [searchType, setSearchType] = useState('nome')

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value)
    }

    const handleSelectChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleClick = () => {
        pokemonFilter(searchValue, searchType)
        setSearchValue("")
    }

    const handleClearFilters = () => {
        setSearchValue("")
        setSearchType("nome")
        pokemonFilter("", "nome")
    }

    return (
        <SearchBarDiv>
            <h1>Convoque seus Pokémons preferidos e monte seu time!</h1>

            {searchType === 'tipo' && (
                <select required value={searchValue} onChange={handleSelectChange}>
                    <option value="">Selecione uma opção</option>
                    <option value="bug">Bug</option>
                    <option value="dark">Dark</option>
                    <option value="dragon">Dragon</option>
                    <option value="electric">Electric</option>
                    <option value="fairy">Fairy</option>
                    <option value="fighting">Fighting</option>
                    <option value="fire">Fire</option>
                    <option value="flying">Flying</option>
                    <option value="ghost">Ghost</option>
                    <option value="grass">Grass</option>
                    <option value="ground">Ground</option>
                    <option value="ice">Ice</option>
                    <option value="normal">Normal</option>
                    <option value="poison">Poison</option>
                    <option value="psychic">Psychic</option>
                    <option value="rock">Rock</option>
                    <option value="steel">Steel</option>
                    <option value="water">Water</option>
                </select>
            )}
            {(searchType === 'nome' || searchType === 'nome-tipo') && (
                <input
                    type="search"
                    placeholder="Buscar Pokémon..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            )}

            <fieldset>
                <p>Selecione o tipo da busca:</p>
                <div>
                    <div className="radio-div">
                        <input
                            type="radio"
                            id="nome"
                            name="searchType"
                            value="nome"
                            checked={searchType === 'nome'}
                            onChange={handleSearchTypeChange}
                        />
                        <label htmlFor="nome">Nome</label>
                    </div>

                    <div className="radio-div">
                        <input
                            type="radio"
                            id="tipo"
                            name="searchType"
                            value="tipo"
                            checked={searchType === 'tipo'}
                            onChange={handleSearchTypeChange}
                        />
                        <label htmlFor="tipo">Tipo</label>
                    </div>


                    <div className="radio-div">
                        <input
                            type="radio"
                            id="nome-tipo"
                            name="searchType"
                            value="nome-tipo"
                            checked={searchType === 'nome-tipo'}
                            onChange={handleSearchTypeChange}
                        />
                        <label htmlFor="nome-tipo">Nome/Tipo</label>
                    </div>
                </div>
            </fieldset>
            <div className="buttons">
                <button onClick={handleClick}>Buscar</button>
                <button onClick={handleClearFilters}>Limpar filtros</button>
            </div>
        </SearchBarDiv>
    )
}
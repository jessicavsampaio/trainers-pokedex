import React from "react";

const TeamContext = React.createContext({
    teamPokemons: [],
    updateTeamPokemons: (id) => null
})

export const TeamProvider = TeamContext.Provider

export default TeamContext
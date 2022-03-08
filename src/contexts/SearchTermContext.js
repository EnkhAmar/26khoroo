import { createContext, useState } from "react";

const initialState = {
    searchTerm: "",
    setSearchTerm: () => {},
    searchPattern: "",
}

const SearchTermContext = createContext(initialState)

function SearchTermProvider({ children }) {
    const [search, setSearch] = useState("")
    const [pattern, setPattern] = useState("")

    const handleSearchTerm = (value) => {
        setSearch(value)
        setPattern(value.toLowerCase())
    }

    return (
        <SearchTermContext.Provider value={{ searchTerm: search, setSearchTerm: handleSearchTerm, searchPattern: pattern }}>
            {children}
        </SearchTermContext.Provider>
    )
}

export { SearchTermProvider, SearchTermContext };
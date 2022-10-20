import React from "react"

const Search = ({countrySearch, handleSearch}) => {
    return (
        <div>
            find countries <input value={countrySearch} onChange={handleSearch} />
        </div>
    )
}

export default Search
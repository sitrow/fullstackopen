import React from "react"
import CountryRender from "./CountryRender"
import CountryWithExpansion from "./CountryWithExpansion"

const RenderCountries = ({filteredCountries}) => {
    
    if(filteredCountries.length > 10){
        return (
            <div>
                too Many results
            </div>
        )
    }else if(filteredCountries.length >1){
        return (
            <div>
                {filteredCountries.map(country => <CountryWithExpansion key={country.name.official} country={country}/>)}
            </div>
        )
    }else if(filteredCountries.length === 1){
        return (
            <CountryRender country={filteredCountries[0]}/>
        )
    }
}

export default RenderCountries
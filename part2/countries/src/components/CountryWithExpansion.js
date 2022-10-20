import React, { useState } from "react";
import CountryRender from "./CountryRender";


const CountryWithExpansion = ({country}) => {
    const [shown, setShown] = useState(false)

    const handleClick = () => {
        setShown(!shown)        
    }

    return (
        <div>
            {country.name.common}
            <button onClick={handleClick} >show</button>
            {
                shown && (
                    <CountryRender country={country} />
                )
            }            
        </div>
    )
}

export default CountryWithExpansion
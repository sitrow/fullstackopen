import React from "react"
import Weather from "./Weather"
import { useEffect, useState } from "react"
import axios from "axios"


const CountryRender = ({country}) => {
    
    const lat= country.capitalInfo.latlng[0]
    const lon = country.capitalInfo.latlng[1]
    //const urlImage = 'https://openweathermap.org/img/wn/'

    const [kairos, setKairos] = useState()

    const weatherHook = () => {
        console.log('weather info incoming')
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(respone => {
                console.log('data acquired')
                setKairos(respone.data)                
            })
    }

    useEffect(weatherHook, [lat, lon])    

    //console.log()
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.name}/>
            
            <Weather country={country} kairos={kairos} />
        </div>
    )
}

export default CountryRender
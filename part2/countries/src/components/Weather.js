import React from "react";


const Weather = ({country, kairos}) => {
    const urlImage = 'https://openweathermap.org/img/wn/'

    if(kairos){
        
        console.log(urlImage.concat(kairos.weather[0].icon,'.png'))
        return (
            <div>
                <h2>Weather in {country.capital[0]}</h2>
                <p>temperature {kairos.main.temp} Celcius</p>
                <img src={urlImage.concat(kairos.weather[0].icon,'.png')} alt='icon'/>
                <p>wind {kairos.wind.speed} m/s</p>
            </div>
        )
    }
    
    return (
        <div>
            Incoming...
        </div>
    )

    
}

export default Weather
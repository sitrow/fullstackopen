
import axios from "axios"
import { useEffect, useState } from "react"

import RenderCountries from "./components/RenderCountries"
import Search from "./components/Search"

const App = (props) => {
  const [countrySearch, setCountrySearch] = useState('')
  const [countries, setCountries] = useState([])
  //const [toRender, setToRender] = useState([])

  const hook = () => {
    console.log('effect')
    axios.get('https://restcountries.com/v3.1/all').then(respone => {
      console.log('promise fullfield')
      setCountries(respone.data)
    })
  }

  useEffect(hook, [])
  console.log(countries.length, 'countries')

  const handleSearch =(event) => {
    setCountrySearch(event.target.value)    
  }

  const filteredCountries = countrySearch ? 
                            countries
                              .filter(country => 
                                country.name.common.toLowerCase().includes(countrySearch.toLowerCase())) : countries
  
  console.log(filteredCountries)

  return (
    <div>
      <Search countrySearch={countrySearch} handleSearch={handleSearch} />
      <RenderCountries filteredCountries={filteredCountries} />
    </div>
  )
}

export default App;

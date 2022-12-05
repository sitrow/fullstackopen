//import axios from 'axios'
import { useState , useEffect} from 'react'

import PeopleRender from './components/PeopleRender'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personSevices from './services/persons'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameSearch, setNameSearch] = useState('')
  const [notifyMessage, setNotifyMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const hook = () => {
    console.log('effect')

    personSevices.getAll().then( respone => {
        console.log('promise fullfield')
        setPersons(respone.data)
      })

    /*axios
      .get('http://localhost:3001/persons')
      .then(respone => {
        console.log('promise fullfield')
        setPersons(respone.data)
      })*/
  }

  useEffect(hook, [])
  console.log('render',persons.length, 'persons')

  /*const updatePerson = (name) => {
    const result = persons.filter(result => result.name === name)
    console.log(result)
  }*/

  const addPerson = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    
    //console.log(names)
    const personObject = {
      name: newName,
      number: newNumber,
      id: names.length + 1      
    }

    if (names.includes(newName)){
      if( window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)){
        const result = persons.filter(result => result.name === newName)
        const changedPerson = {...result[0], number: newNumber}
        const id = result[0].id
        console.log(id)
        return personSevices.update(id, changedPerson).then(respone => {
          setNewName('')
          setNewNumber('')
          hook()
        })
        .then(() => {
          setNotifyMessage(`${changedPerson.name}'s number changed`)
          setTimeout(() => {
            setNotifyMessage(null)
          }, 3000)
        })
        .catch(error => {
          setErrorMessage(`Couldn't change ${changedPerson.name} number`)
          setTimeout( () => {
            setErrorMessage(null)
          }, 3000)
        })
      }
    } else {
      personSevices
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      })
      .then(()=>hook())
      .then(() => {
        setNotifyMessage(`${personObject.name} added`)
        setTimeout(() => {
          setNotifyMessage(null)
        }, 3000)
      })
      .catch(err => {
        //console.log(err.response.data.error)

        setErrorMessage(err.response.data.error)
        setTimeout( () => {
          setErrorMessage(null)
        }, 3000)
      })
    }  
  }

  const removePerson = (event) => {
    
    const id = event.target.id
    console.log(id)
    if(window.confirm('Are you sure?')) {
      console.log('Yess')
      personSevices
        .remove(id)
        .then(() => hook())
        .catch(error => {
          setErrorMessage(`Couldn't delete entry`)
          setTimeout( () => {
            setErrorMessage(null)
          }, 3000)
        })  
    }    
  }

  

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleNameSearch = (event) => {
    setNameSearch(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notifyMessage}/>
      <ErrorMessage message={errorMessage}/>
      <Filter nameSearch={nameSearch} handleNameSearch={handleNameSearch} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <PeopleRender persons={persons} nameSearch={nameSearch} removePerson={removePerson}/>
    </div>
  )
}

export default App
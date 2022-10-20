import React from "react";

const PersonalDetails = ({filtered, removePerson}) => {
    
    return (
        <div>
            {filtered.name} {filtered.number} <button id={filtered.id} onClick={removePerson}>delete</button>
        </div>
    )
}

const PeopleRender = ({persons, nameSearch, removePerson}) => {    
    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(nameSearch.toLowerCase())).map(filtered => (
                <PersonalDetails key={filtered.id} filtered={filtered} removePerson={removePerson}/>
                ))
            }            
        </div>
    )
}

export default PeopleRender
import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import noteService from './services/notes'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ filteredPersons, setFilteredPersons ] = useState(persons) 
  
  useEffect(() => {
  	noteService
  		.getAll()
  		.then(initialPersons => {
  			setPersons(initialPersons)
  			setFilteredPersons(initialPersons)  		
  		})
  }, [])
	
	const filterAction = (current_persons) => {
		const filterInput = document.getElementById('filter')
		const newFilteredPersons = filterInput.value === '' ? current_persons : current_persons.filter(person => {
			return person.name.toLowerCase().includes(filterInput.value.toLowerCase())
		})

		setFilteredPersons(newFilteredPersons)	
	}
	
  return (
    <div>
      <h2>Phonebook</h2>
			<Filter 
				persons={persons}
				setFilteredPersons={setFilteredPersons}
				filterAction={filterAction}
			/>
      
      <h2>add a new</h2>
 			<PersonForm 
 				persons={persons}
 				setPersons={setPersons}
 				filterAction={filterAction}
			/>
      
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App

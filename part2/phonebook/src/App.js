import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [ filteredPersons, setFilteredPersons ] = useState(persons)
	
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

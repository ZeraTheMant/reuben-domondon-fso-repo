import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearchInput, setNewSearchInput ] = useState('')
  const [ filteredPersons, setFilteredPersons ] = useState(persons)

	const nameAlreadyAdded = () => persons.find(person => person.name === newName)

	const fieldsNotEmpty = () => {
		const fieldNotEmpty = (input) => input.value.trim() !== ''
		const name = document.querySelector('#name')
		const number = document.querySelector('#number')
		
		return fieldNotEmpty(name) && fieldNotEmpty(number)
	}

	const addPerson = (e) => {
		e.preventDefault()
		
		if (!nameAlreadyAdded()) {
			if (fieldsNotEmpty()) {
				const oldPersons = [...persons];
				const newPerson = {name: newName, number: newNumber}		
				
				setPersons(oldPersons.concat(newPerson))				
			} else {
				alert('Please fill up all fields.')
			}	
		} else {
			alert(`${newName} is already added to the phonebook.`)
		}
	}
	
	const handleNameChange = (e) => setNewName(e.target.value)
	const handleNumberChange = (e) => setNewNumber(e.target.value)
	const handleSearchChange = (e) => {
		setNewSearchInput(e.target.value)

		if (newSearchInput === '') {
			setFilteredPersons(persons)
		} else {
			const newFilteredPersons = persons.filter(person => {
				console.log(person.name.includes(e.target.value), person.name, e.target.value)
				return person.name.toLowerCase().includes(newSearchInput.toLowerCase())
			})

			setFilteredPersons(newFilteredPersons)
		}
	}
	
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      	filter shown with
      	<input
      		placeholder='Search'
      		value={newSearchInput}
      		onChange={handleSearchChange}
      	/>
      </div>
      
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
          	placeholder='Enter name'
          	value={newName}
          	onChange={handleNameChange}
          	id="name"
          />
         </div>
         <div>
         	number:
          <input
          	placeholder='Enter number'
          	value={newNumber}
          	onChange={handleNumberChange}
          	id="number"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      <dl>
      	{filteredPersons.map(person => {
      		return <dt key={person.name}>{person.name} {person.number}</dt>
      	})}
      </dl>
    </div>
  )
}

export default App

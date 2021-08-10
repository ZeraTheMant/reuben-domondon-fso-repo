import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas'}
  ]) 
  const [ newName, setNewName ] = useState('')

	const nameAlreadyAdded = () => persons.find(person => person.name === newName)

	const addPerson = (e) => {
		e.preventDefault()
		
		if (!nameAlreadyAdded()) {
			const oldPersons = [...persons];
			const newPerson = {name: newName}		
			setPersons(oldPersons.concat(newPerson))		
		} else {
			alert(`${newName} is already added to the phonebook.`)
		}
	}
	
	const handleNameChange = (e) => {
		setNewName(e.target.value)
	}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
          	placeholder='Enter name'
          	value={newName}
          	onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <dl>
      	{persons.map(person => {
      		return <dt key={person.name}>{person.name}</dt>
      	})}
      </dl>
    </div>
  )
}

export default App

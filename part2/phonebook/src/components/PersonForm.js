import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons, filterAction }) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')  
  
	const handleNameChange = (e) => setNewName(e.target.value)
	const handleNumberChange = (e) => setNewNumber(e.target.value)
	  
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
				
				const newPersons = oldPersons.concat(newPerson)
				setPersons(newPersons)		
				filterAction(newPersons)
				alert(`${newName} added to phonebook.`)		
			} else {
				alert('Please fill up all fields.')
			}	
		} else {
			alert(`${newName} is already added to the phonebook.`)
		}
	}  
  
	return (
		<div>
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
		</div>
	)
}

export default PersonForm

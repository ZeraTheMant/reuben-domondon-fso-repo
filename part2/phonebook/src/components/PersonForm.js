import React, { useState } from 'react'
import noteService from '../services/notes'

const PersonForm = ({ persons, setPersons, filterAction, setNotificationMessage, setNotificationClass }) => {
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

	const getNewId = () => {
		const ids = persons.map(person => person.id)
		return Math.max(...ids) + 1
	}

	const addPerson = (e) => {
		e.preventDefault()
		
		if (!nameAlreadyAdded()) {
			if (fieldsNotEmpty()) {
				const oldPersons = [...persons];
				const newPerson = {name: newName, number: newNumber, id: getNewId()}		

				noteService
					.create(newPerson)
					.then(returnedPerson => {
						const newPersons = oldPersons.concat(newPerson)			
						setPersons(newPersons)		
						filterAction(newPersons)
						setNewName('')
						setNewNumber('')
						setNotificationMessage(`${newName} added to phonebook.`)				
						setNotificationClass('success')										
					})
			} else {
				setNotificationMessage('Please fill up all fields.')
				setNotificationClass('error')					
			}	
		} else {
			if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
				const personToBeUpdated = persons.find(person => person.name === newName)
				const updatedPerson = {...personToBeUpdated, number: newNumber}
				
				noteService
					.update(updatedPerson.id, updatedPerson)
					.then(returnedPerson => {
						const newPersons = persons.map(person => person.id === returnedPerson.id ? returnedPerson : person)
						setPersons(newPersons)
						filterAction(newPersons)
					
						setNewName('')
						setNewNumber('')
						setNotificationMessage(`${returnedPerson.name}'s number successfully updated.`)			
						setNotificationClass('success')	
					})
			}
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

import React from 'react'

import noteService from '../services/notes'

const DeleteButton = ({ person, persons, setPersons, setNotificationMessage, setNotificationClass, filterAction }) => {
	const confirmDelete = (e) => {
		if (window.confirm(`Delete ${person.name}?`)) {
			const deletedPerson_name = person.name
			noteService
				.delete_data(person.id)
				.then(result => {
					setNotificationMessage(`${deletedPerson_name} deleted from phonebook.`)		
					setNotificationClass('error')					
				})
				.catch(error => {
					setNotificationMessage(`Information of ${deletedPerson_name} has already been removed from server.`)		
					setNotificationClass('error')						
				})
				.finally(() => {
					const newPersons = persons.filter(person_inner => person_inner.id !== person.id)
					setPersons(newPersons)
					filterAction(newPersons)				
				})
		}
	}
	
  return (
    <button onClick={confirmDelete}>
			delete
    </button>
  )
}

export default DeleteButton

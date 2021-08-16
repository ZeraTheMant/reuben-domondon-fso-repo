import React from 'react'

import noteService from '../services/notes'

const DeleteButton = ({ person }) => {
	const confirmDelete = (e) => {
		if (window.confirm(`Delete ${person.name}?`)) {
			const deletedPerson_name = person.name
			noteService
				.delete_data(person.id)
				.then(result => {
					const item = e.target.parentNode
					const ul = item.parentNode
					ul.removeChild(item)
					alert(`${deletedPerson_name} deleted from phonebook.`)							
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

import React from 'react'
import DeleteButton from './DeleteButton'

const Persons = ({ persons, setPersons, setNotificationMessage, setNotificationClass, filterAction }) => {
	return (
		<div>
      <dl>
      	{persons.map(person => {
      		return (
      			<dt 
      				key={person.id}>
      					{person.name} {person.number}
      					<DeleteButton
      				 	 	person={person} 
      				 	 	persons={persons}
      				 	 	setPersons={setPersons}
									setNotificationMessage={setNotificationMessage}
 									setNotificationClass={setNotificationClass}  
 									filterAction={filterAction}				 	 
      				 	/>
      			</dt>
      		)
      	})}
      </dl>		
		</div>
	)
}

export default Persons

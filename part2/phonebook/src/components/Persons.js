import React from 'react'
import DeleteButton from './DeleteButton'

const Persons = ({ persons }) => {
	return (
		<div>
      <dl>
      	{persons.map(person => {
      		return (
      			<dt 
      				key={person.id}>
      					{person.name} {person.number}
      					<DeleteButton person={person} />
      			</dt>
      		)
      	})}
      </dl>		
		</div>
	)
}

export default Persons

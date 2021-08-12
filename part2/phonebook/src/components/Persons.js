import React from 'react'

const Persons = ({ persons }) => {
	return (
		<div>
      <dl>
      	{persons.map(person => {
      		return <dt key={person.name}>{person.name} {person.number}</dt>
      	})}
      </dl>		
		</div>
	)
}

export default Persons

import React from 'react'

const Filter = ({ persons, setFilteredPersons, filterAction }) => {
  
	const handleFilterChange = (e) => {
		const filterValue = e.target.value

		if (filterValue === '') {
			setFilteredPersons(persons)
		} else {
			filterAction(persons)
			/*const newFilteredPersons = persons.filter(person => {
				return person.name.toLowerCase().includes(filterValue.toLowerCase())
			})

			setFilteredPersons(newFilteredPersons)*/
		}
	}  

	return (
		<div>
      filter shown with
      <input
      	placeholder='Search'
      	onKeyUp={handleFilterChange}
      	id='filter'
      />		
		</div>
	)
}

export default Filter

import React from 'react'
import Part from './Part'
import Summary from './Summary'

const Content = ({ parts }) => {
	const getTotal = () => parts.reduce((accumulator, current_part) => accumulator + current_part.exercises, 0)

	return (
		<div>
			{parts.map(part_x =>
				<Part 
					key={part_x.id}
					name={part_x.name}
					exercises={part_x.exercises}
				/>
			)}
			<Summary total={getTotal()}/>
		</div>
	)
}

export default Content

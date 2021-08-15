import React from 'react'

const DisplayDetailsButton = ({ display, setDisplay }) => {
	const handleClick = () => setDisplay(!display)

	return (
		<button onClick={handleClick}>{display ? 'hide' : 'show'}</button>
	)
}

export default DisplayDetailsButton

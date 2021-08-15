import React, { useState } from 'react'
import CountryDetails from './CountryDetails'
import DisplayDetailsButton from './DisplayDetailsButton'


const CountryListItemView = ({ country }) => {
	const [display, setDisplay] = useState(false)
	const willDisplay = () => display ? country : null

	return (
		<dt>
			{country.name}
			<DisplayDetailsButton 
				display={display}
				setDisplay={setDisplay} />
			<br/>
			{willDisplay() ? <CountryDetails country={country} /> : null}
		</dt>
	)  
}

export default CountryListItemView

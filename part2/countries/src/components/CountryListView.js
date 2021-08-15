import React from 'react'
import CountryListItemView from './CountryListItemView'

const CountryListView = ({ countries }) => {
	return (
		<div>
			<dl>
				{countries.map(country => {
					return (<CountryListItemView key={country.name} country={country} />)
				})}
			</dl>
		</div>
	)  
}

export default CountryListView

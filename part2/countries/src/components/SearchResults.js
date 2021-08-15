import React from 'react'
import CountryDetails from './CountryDetails'
import CountryListView from './CountryListView'

const SearchResults = ({ countries }) => {
	if (countries.length > 10) {
		return (<div>Too many matches, specify another filter</div>)	
	} else if (countries.length === 1) {
		return (<CountryDetails country={countries[0]} />)
	} else if (countries.length > 0 && countries.length < 11) {
		return (<CountryListView countries={countries} />)
	} else {
		return (<div>No country found</div>)
	}
}

export default SearchResults

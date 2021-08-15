import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchResults from './components/SearchResults'


const App = () => {
	const [countries, setCountries] = useState([])
	const [filteredCountries, setFilteredCountries] = useState([])

	useEffect(() => {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
				setCountries(response.data)
				setFilteredCountries(response.data)				
			})
	}, [])
	
	const handleSearch = (e) => {
		const filteredResults = countries.filter(country => {		
			return country.name.toLowerCase().includes(e.target.value.toLowerCase())
		});
		setFilteredCountries(filteredResults)
	}


	return (
		<div>
			<p>
				find countries
				<input 
					type='text'
					onKeyUp={handleSearch} />
			</p>

			<SearchResults countries={filteredCountries} />
		</div>
	)
}

export default App;

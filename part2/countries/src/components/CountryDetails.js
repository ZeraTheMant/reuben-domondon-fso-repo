import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = ({ country }) => {
	const [tempData, setTempData] = useState({location:{}, current: {}})

	useEffect(() => {
		axios
			.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${country.capital}`)
			.then(response => {
				console.log(response.data)
				setTempData(response.data)
			})		
	}, [country.capital])


	return (
		<div>
			<h1>{country.name}</h1>
			<p>capital {country.capital}</p>
			<p>population {country.population}</p>
			
			<h2>languages</h2>
			<ul>
				{country.languages.map(language_obj => {
					return (<li key={language_obj.name}>{language_obj.name}</li>)
				})}
			</ul>
			
			<img width='200px' src={country.flag} />
			
			<h2>Weather in {country.capital}</h2>
			<p><strong>temperature</strong> {tempData && tempData.current.temperature} Celsius</p>
			<p>
				<img src={tempData && tempData.current.weather_icons}/>
			</p>
			<p>
				<strong>wind</strong>{' '} 
				{tempData && tempData.current.wind_speed}{' '}  
				mph direction{' '}  
				{tempData && tempData.current.wind_dir}
			</p>
		</div>
	)  
}

export default CountryDetails

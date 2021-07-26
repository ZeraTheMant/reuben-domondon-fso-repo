import React from 'react'

const Header = (props) => {
	return (
		<h1>{props.course}</h1>
	)
}

const Part = (props) => {
	return (
		<p>{props.part} {props.exercise}</p>
	)
}
			
const Content = (props) => {
	return (
		<div>
			<Part part={props.part1} exercise={props.exercise1}/>
			<Part part={props.part2} exercise={props.exercise2}/>
			<Part part={props.part3} exercise={props.exercise3}/>
		</div>
	)
}

const Total = (props) => {
	const reducer = (accumulator, current_part) => accumulator + current_part.exercises
	const sum = props.parts.reduce(reducer, 0);

	return (
		<p>Number of exercises {sum}</p>
	)
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  	{
  		name: 'Fundamentals of React',
  		exercises: 10
  	},
  	{
  		name: 'Using props to pass data',
  		exercises: 7
  	},
  	{
  		name: 'State of a component',
    	exercises: 14
  	}
  ]

  return (
    <div>
      <Header course={course}/>
	
      <Total parts={parts}/>
    </div>
  )
}

export default App

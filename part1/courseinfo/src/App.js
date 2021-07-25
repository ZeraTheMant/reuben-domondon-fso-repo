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

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
			<Content
				part1={part1}
				exercise1={exercises1}
				part2={part2}
				exercise2={exercises2}
				part3={part3}
				exercise3={exercises3}
			/>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App

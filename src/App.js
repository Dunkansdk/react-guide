import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

	state = {
		persons: [
			{name: 'Emanuel', age: 24},
			{name: 'Stephanie', age: 26}
		],
		otherState: 'some other value'
	}

	switchNameHandler = () => {
		// console.log('Was clicked!');
		// this.state.persons[0].name = 'Manuel';
		this.setState({
			persons: [
				{name: 'Ema', age: 24},
				{name: 'Stephanie', age: 23}
			] 
		})
	}

	render() {
		return (
			<div className="App">
				<h1>Im react app</h1>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: Racing</Person>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
			</div>
		);  
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App'));
	}  
}

export default App;

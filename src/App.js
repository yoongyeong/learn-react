import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
	state = {
		person: [
			{ name: "Kevin", age: 30 },
			{ name: "Pratama", age: 28 },
		],
		showPerson: false,
	}

	deletePersonHandler = ( personIndex ) => {
		// const person = this.state.person.slice();
		const person = [...this.state.person];
		person.splice( personIndex, 1 );
		this.setState( { person: person } );
		console.log(person);
		
	}

	nameChangeHandler = ( event ) => {
		this.setState( {
			person: [
				// { name: newName, age: newAge },
				{ id: '3qw2rdfz3wq' name: 'Kvine', age: 42 },
				{ id: 'edsgtr54tre' name: event.target.value, age: 40 },
			]
		} )
	}

	togglePersonHandler = () => {
		const doShow = this.state.showPerson;
		this.setState( { showPerson: !doShow } )
	}

	render () {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if ( this.state.showPerson ) {
			persons = (
				<div>
					{
						this.state.person.map( ( prsn, index ) => {
							return <Person
								click={() => this.deletePersonHandler( index )}
								name={prsn.name}
								age={prsn.age}
								key={index}
							/>
						} )
					}
				</div>
			)
		}

		return (
			<div className="App">
				<h1>This is a React App.</h1>
				{/* <button onClick={() => this.switchNameHandler('Bound Name')}>Switch Name</button> */}
				{/* <button
					style={style}
					onClick={this.switchNameHandler.bind( this, 'Bound Name' )}>Switch Name</button> */}
				<button
					style={style}
					onClick={this.togglePersonHandler}>Toggle Person</button>
				{persons}
			</div>
		);
	}
}

export default App;

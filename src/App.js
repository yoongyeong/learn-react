import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{id: '3qw2rdfz3wq', name: "Kevin", age: 30},
			{id: 'edsgtr54tre', name: "Pratama", age: 28},
		],
		showPerson: false,
	}

	deletePersonHandler = (personIndex) => {
		// const person = this.state.person.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
		// console.log(person);
	}

	// nameChangeHandler = (event, id) => {
	// 	const personIndex = this.state.person.findIndex(p => {
	// 		return p.id === id;
	// 	});

	// 	const person = {
	// 		...this.state.person[personIndex],
	// 	}

	// 	person.name = event.target.value;

	// 	const persons = [...this.state.person];
	// 	persons[personIndex] = person;

	// 	this.setState({person: person});
	// }

	nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

	togglePersonHandler = () => {
		const doShow = this.state.showPerson;
		this.setState({showPerson: !doShow})
	}

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		console.log(this.state.person);
		

		if (this.state.showPerson) {
			persons = (
				<div>
					{
						this.state.persons.map((prsn, index) => {
							return <Person
								click={() => this.deletePersonHandler(index)}
								name={prsn.name}
								age={prsn.age}
								key={prsn.id}
								changed={(event) => this.nameChangedHandler(event, prsn.id)}
							/>
						})
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

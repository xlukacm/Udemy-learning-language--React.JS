import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Person/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../High Order Comp/withClass';
import Aux from '../High Order Comp/Auxillia'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = { //toto je moderny konstruktor, kedysi sa hadzal vyssie
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate');
    return true;             //false, zabranuje uptade!!
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return{
        persons: persons,
        changeCounter: prevState.changeCounter +1  //namiesto this.state staci len prevState
      };
      });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('render');
    let persons = null;

    if (this.state.showPersons) {
      persons =
          <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
          />;

    }

    return (  //withclass nahrada za div napr pre error handling
      <Aux>
        <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
        />
        {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);  //kukni na withClass js

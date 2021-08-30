import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List';
import { IPerson } from './types/types';

function App() {
  // const [people, setPeople] = useState([{
  //   name: 'Cristiano Ronaldo',
  //   url: '',
  //   age: 36,
  //   note: 'Very good player'
  // }, {
  //   name: 'Wayne Rooney',
  //   url: '',
  //   age: 35,
  //   note: "My favourite player"
  // }])

  // const [people, setPeople] = useState<IState["people"]>([])
  const [people, setPeople] = useState<IPerson[]>([])

  return (
    <div className="App">
      People invited to the party
      <List people={people} />
    </div>
  );
}

export default App;

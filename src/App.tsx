import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string,
  }[]
}

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

  const [people, setPeople] = useState<IState["people"]>([])

  return (
    <div className="App">
      People invited to the party
    </div>
  );
}

export default App;

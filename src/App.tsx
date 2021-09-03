import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List';
import { IPerson } from './types/types';
import AddToList from './components/AddToList';

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
  const [people, setPeople] = useState<IPerson[]>([
    {
      name: 'Cristiano Ronaldo',
      url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.scmp.com%2Fmagazines%2Fstyle%2Fnews-trends%2Farticle%2F3090385%2Fcristiano-ronaldo-becomes-worlds-first-billionaire&psig=AOvVaw2gK4AOtXeuhj0el7KnvpTW&ust=1630742098754000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMijyfGp4vICFQAAAAAdAAAAABAD',
      age: 36,
      note: 'Very good player'
    }
  ])

  return (
    <div className="App">
      People invited to the party
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import  cards from './images.json';
import  card from './components/card'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    cards: cards,
    click: [],
    score: 0
  };
  render() {
    return (
      <div>
        <card url={cards[0].url}/>
      </div>
    )
  }
}



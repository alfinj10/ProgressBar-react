import React, { Component } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar.js';
import TotalBars from './components/TotalBars';

class App extends React.Component {

  state = {
    bars: [
      {
        title: 'Progress Bar 1',
        value: 40
      },

      {
        title: 'Progress Bar 2',
        value: 60
      },

      {
        title: 'Progress Bar 3',
        value: 80
      },
      {
        title: 'Progress Bar 4',
        value: 100
      }

    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Progress Bar Fun</h1>
        <div className="container">
          <TotalBars bars={this.state.bars}/>
        </div>
      </div>
    );
  }
  
}

export default App;

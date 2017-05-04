import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RedditPost from './redditPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RedditPost />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RedditPost from './redditPost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RedditPost title="Super fun dog!" link="http://google.com" commentCount={10} minutesAgo={2} />
        <RedditPost title="Lots of fun cats" link="http://google.com" commentCount={5} minutesAgo={20} />
        <RedditPost title="Awesome Fishes" link="http://google.com" commentCount={15} minutesAgo={30} />
        <RedditPost title="New Solar Power Tech" link="http://google.com" commentCount={20} minutesAgo={10} />
        
      </div>
    );
  }
}

export default App;

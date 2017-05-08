import React, { Component } from 'react';
import { database } from 'firebase'
import _ from 'lodash'
import logo from './logo.svg';
import './App.css';
import RedditPost from './redditPost'
import NewPost from './newPost'

class App extends Component {
  constructor() {
    super()
    this.state = { redditPosts: [] }
  }
  
  componentWillMount() {
    database().ref('/').on('value', (snapshot) => {
      const redditPosts = snapshot.val()
      this.setState({redditPosts: redditPosts })
    })

  }
  
  render() {
    const redditPostComponents = _.map(this.state.redditPosts, (redditPost, key) => {
      return (
        <RedditPost
          key={key}
          title={redditPost.title} 
          link={redditPost} 
          commentCount={redditPost.commentCount} 
          minutesAgo={redditPost.minutesAgo} 
        />
      )
    })
    return (
      <div className="App">
        <NewPost onAdd={(redditPost) => {
          this.setState({redditPosts: this.state.redditPosts.concat(redditPost)}) 
        }}/>
        {redditPostComponents}
      </div>
    );
  }
}

export default App;

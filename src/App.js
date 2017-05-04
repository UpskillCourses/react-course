import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RedditPost from './redditPost'
import NewPost from './newPost'
import redditPosts from './data/redditPosts'

class App extends Component {
  constructor() {
    super()
    this.state = { redditPosts: [] }
  }
  
  componentWillMount() {
    this.setState({redditPosts: redditPosts })
  }
  
  render() {
    const redditPostComponents = this.state.redditPosts.map((redditPost) => {
      return (
        <RedditPost
          key={redditPost.title}
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

import React from 'react';
import ReactDOM from 'react-dom';
import { database } from 'firebase'
import App from './App';
import './firebase'
import './index.css';

database().ref('/').on('value', (snapshot) => console.log(snapshot.val()))

database().ref('/').push({title: "New Solar Power, Tech", link: "http://google.com", commentCount: 20, minutesAgo: 10})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

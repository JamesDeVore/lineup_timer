import React, { Component } from 'react';
import TitleBar from './components/TitleBar';
import RecentPost from './components/RecentPost'

class App extends Component {

  render() {
    return (
      <div className="container">
      <TitleBar />
      <hr />
      <RecentPost />
      </div>
    )
  }
}

export default App
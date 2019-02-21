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
      <div className="row">Link to recent post</div>
      </div>
    )
  }
}

export default App
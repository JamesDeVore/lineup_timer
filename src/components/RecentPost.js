import React, { Component } from 'react'
import {fetchRecentPosts} from '../utils/fetchPosts'

export default class RecentPost extends Component {
  constructor(props){
    super(props)
    this.state = {
      recentPost:null
    }
  }
  componentDidMount = async () => {
    let post = await fetchRecentPosts()

    this.setState({recentPost:post})
  }

  renderPost = () => {
    if(this.state.recentPost){
      console.log(this.state)
      let {data:{title,selftext,score,author}} = this.state.recentPost

      return (
        <div className="row">
        <h1>{title}</h1>
        <p>{selftext}</p>
        <p>{score}</p>
        <p>{author}</p>
        </div>
      )
    } else{
      return (
        <div>Loading. . . </div>
      )
    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-12 timer ">
        <h1 className="title">Timer</h1>
        </div>
        {this.renderPost()}
      </div>
    )
  }
}

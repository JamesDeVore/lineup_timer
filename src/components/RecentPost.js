import React, { Component } from 'react'
import {fetchRecentPosts} from '../utils/fetchPosts'
import Timer from './Timer'

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

  renderTimer(){
    if(this.state.recentPost){
      let {data:{created_utc}} = this.state.recentPost
      return (<Timer time={created_utc} />)
    } else {
      return 
    }
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
        {this.renderTimer()}
        </div>
        {this.renderPost()}
      </div>
    )
  }
}

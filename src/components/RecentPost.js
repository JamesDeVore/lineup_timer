import React, { Component } from 'react'
import { fetchRecentPosts } from '../utils/fetchPosts'
import Timer from './Timer'
import moment from 'moment'

export default class RecentPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recentPost: null
    }
  }
  componentDidMount = async () => {
    let post = await fetchRecentPosts()

    this.setState({ recentPost: post })
  }

  renderTimer() {
    if (this.state.recentPost) {
      let { data: { created_utc } } = this.state.recentPost
      return (<Timer time={created_utc} />)
    } else {
      return
    }
  }

  renderPost = () => {
    if (this.state.recentPost) {
      console.log(this.state)
      let { data: { title, selftext, score, author, created_utc, permalink } } = this.state.recentPost

      return (
        <div>
        <div className="row">
        <h2>Most recent post:</h2>
        </div>
        <div className="row recentPost">
        <div className="col-md-12">
         <a href={`https://reddit.com/${permalink}`} className="link">{title}</a>
            </div>
            <div className="col-md-1">
            <p>Total Score: {score}</p>
            </div>
            <div className="col-md-6">
          <p className="postText">{selftext}</p>
          <p className="postAuthor">{author}</p>
              <p className="postDate">{moment.unix(created_utc).format("MMM-Do-YYYY LT")}</p>
            </div>
        </div>
        </div>
      )
    } else {
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

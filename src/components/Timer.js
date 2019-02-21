import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props){
    super(props)
    this.state= {
      currentTime:null,
    }
  }

  componentDidMount() {
    let date = new Date()
    this.interval = setInterval(() => this.setState({ currentTime: Math.round(date.getTime() / 1000 )}), 1000);
  }
  tick() {
    let date = new Date()
    this.setState({ currentTime: Math.round(date.getTime() / 1000) });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderTime = () => {
    if(this.state.currentTime > 1000){
    let timeDifference = this.state.currentTime - this.props.time
    return (
      <div className="col-md-8 offset-md-2">
        <h2>It has been {timeDifference} seconds since someone asked about the lineup</h2></div>
    ) 
  }
}
  render() {
    return (
      <div className="row">
        {this.renderTime()}
      </div>
    )
  }
}

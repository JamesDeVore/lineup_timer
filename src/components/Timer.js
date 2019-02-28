import React, { Component } from 'react'

export default class Timer extends Component {
  constructor(props){
    super(props)
    this.state= {
      currentTime:null,
    }
  }

  // componentDidMount() {
  //   let date = new Date()
  //   this.interval = setInterval(() => this.setState({ currentTime: Math.round(date.getTime() / 1000 )}), 1000);
  // }
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

  convertSecondsToHMS = (seconds) => {
    var date = new Date(null);
    date.setSeconds(seconds); // specify value for SECONDS here
    return date.toISOString().substr(11, 8);
  }

  renderTime = () => {
    if(this.state.currentTime > 1000){
    let timeDifference = this.state.currentTime - this.props.time
    return (
      <div className="col-md-8 offset-md-2">
        <h2 className="timeSince">It has been {this.convertSecondsToHMS(timeDifference)} since someone posted about the lineup</h2></div>
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

import React, { Component } from 'react'

export default class TitleBar extends Component {
  render() {
    return (
      <div className="navbar navbar-nav">
        <h1 className="brand">When will the lineup drop???</h1>
        <p className="text-sm">A fun helper to find when the EDC LV lineup is going to drop</p>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class TitleBar extends Component {
  render() {
    return (
      <div className="navbar navbar-nav title-card">
        <h1 className="brand">Has the lineup dropped??</h1>
        <p className="text-sm">In case you were wondering if the lineup has been released yet</p>
      </div>
    )
  }
}

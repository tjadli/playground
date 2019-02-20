import React, { Component } from 'react'

export default class Header extends Component {

  render() {
    return (
      <header>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">
            <img className="logo" alt="Logo" height="70px" src="/assets/images/logo.png" />
          </a>

        </nav>
      </header>
    )
  }
}
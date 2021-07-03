import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style.css'

export default class Navbar extends Component {
    render() {
      return (
      <nav className="transparent">
        <div id="nav-leftside">
          <Link to="/">
            <button type="button" className="header-button">Clay Novotney</button>
          </Link>
        </div>
        <div id="nav-rightside">
          <div id="button-container">
            <Link to="/aboutme">
                <button type="button" className="header-button">About Me</button>
            </Link>
            <Link to="/projects">
              <button type="button" className="header-button">Projects</button>
            </Link>
            <Link to="/work">
              <button type="button" className="header-button">Work</button>
            </Link>
            <Link to="/education">
            <button type="button" className="header-button">Education</button>
            </Link>
          </div>
        </div>
      </nav>
      )
    }
}


// sudo certbot --nginx -d claytonnovotney.me -d www.claytonnovotney.me
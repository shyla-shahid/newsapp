import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
  }

  handleNavToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  handleNavClick = () => {
    this.setState({
      isNavOpen: false
    });
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">The Daily Brief</a>
          <button className="navbar-toggler" type="button" onClick={this.handleNavToggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${this.state.isNavOpen ? ' show' : ''}`} onClick={this.handleNavClick}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/science">Science</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/business">Business</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/health">Health</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sports">Sports</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/technology">Technology</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

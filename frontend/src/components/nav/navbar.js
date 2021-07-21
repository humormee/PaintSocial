import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={'/'}><button>Create Painting</button></Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}><button>Signup</button></Link>
          <Link to={'/login'}><button>Login</button></Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <Link to="/paintings">
          <h1>Paint Social</h1>
        </Link>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
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
          <div className="newpaintingicon">
              <Link to={'/painting'}>
                  <img src="https://cdn.discordapp.com/attachments/597985513701376013/867223282989006889/Make_New_File_Icon.png" alt="NewFile"/>
              </Link>
          </div>

          <div className="logouticon">
              <button onClick={this.logoutUser}>s
                  <img src="https://cdn.discordapp.com/attachments/597985513701376013/867223281827971092/Log_Out_Icon.png" alt="LogOut"/>
              </button>
          </div>

        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}><button className="sign">Signup</button></Link>
          <Link to={'/login'}><button className="log">Login</button></Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="logo">
            <Link to="/">
                <img src="https://cdn.discordapp.com/attachments/597985513701376013/867223288769675304/PaintSocial_Logo.png" alt="PaintSocialLogo"/>
            </Link>
        </div>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
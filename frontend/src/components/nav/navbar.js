import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout()
      // .then(() => this.props.history.push(`/`));
    this.props.history.push(`/`);
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-links">

          <div className="newpainting-icon">
            <Link to={'/painting'}> 
              <button className="nav-button">
                {/* Paint
                <img src="https://media.discordapp.net/attachments/597985513701376013/877200677170987148/Create_New_Icon_New.png?width=670&height=670" alt="NewFile"/> */}
                <i class="fas fa-paint-brush"></i>
              </button>
            </Link>
          </div>

          <div className="logout-icon"> 
            <button className="nav-button" onClick={this.logoutUser}>
              Logout &ensp;
                {/* <img src="https://media.discordapp.net/attachments/597985513701376013/877200658460188702/Log_Out_Icon_New.png?width=670&height=670" alt="LogOut"/>  */}
                <i class="fas fa-sign-out-alt"></i>
            </button>
          </div>

        </div>
      );
    } else {
      return (
        <div className="sign-log">
          <Link to={'/signup'}><button className="sign">Signup</button></Link>
          <Link to={'/login'}><button className="log">Login</button></Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <span className="topbackground"><img src="https://cdn.discordapp.com/attachments/597985513701376013/874777752077762610/Background_1.png"/></span>

        <span className="bottombackground"><img src="https://cdn.discordapp.com/attachments/597985513701376013/875045711060799548/Background_3.png"/></span>

        <div className="nav-bar">
          <div className="welcome-icon">
            <Link to="/">
              <button classsName="nav-button">
                Welcome!
                <img src="https://media.discordapp.net/attachments/597985513701376013/877202754278391919/Hand_Wave.png?width=670&height=670"
                alt="Welcome"/>
              </button>
            </Link>
          </div>

          <div className="logo">
              <Link className="logo-link" to="/index">
                  <img src="https://media.discordapp.net/attachments/865977609330753600/868137469281972254/PaintSocial_Logo_Bigger.png?width=538&height=538"/>
              </Link>
          </div>
          {this.getLinks()}
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
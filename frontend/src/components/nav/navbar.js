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
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-links">
          <div className="newpainting-icon">
            <Link to={'/painting'}> 
              <button className="nav-button">
                Paint
                <img src="https://cdn.discordapp.com/attachments/597985513701376013/867223282989006889/Make_New_File_Icon.png" alt="NewFile"/>
              </button>
            </Link>
          </div>

          <div className="logout-icon"> 
            <button className="nav-button" onClick={this.logoutUser}>
              Logout
                <img src="https://cdn.discordapp.com/attachments/597985513701376013/867223281827971092/Log_Out_Icon.png" alt="LogOut"/> 
            </button>
          </div>

          <div className="welcome-icon">
            <Link to="/">
              <button classsName="nav-button">
                Welcome!
                <img src="https://cdn.discordapp.com/attachments/865977609330753600/875399258927427624/welcome.png"
                alt="Welcome"/>
              </button>
            </Link>
          </div>

        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}><button className="sign">Signup</button></Link>
          <Link to={'/login'}><button className="log">Login</button></Link>
          <Link to={'/'}><button className="welcome">Welcome!</button></Link>
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
        <div className="logo">
            <Link to="/index">
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
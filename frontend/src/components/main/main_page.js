import React from 'react';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <div className="front-logo">
            <Link to="/">
                <img src="https://cdn.discordapp.com/attachments/597985513701376013/867240581189337098/PaintSocial_Logo_Bigger.png" alt="PaintSocialLogo"/>
            </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
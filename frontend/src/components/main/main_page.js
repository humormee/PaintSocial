import React from 'react';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <div className="front-logo">
            {/* <Link to="/"> */}
                {/* <img src="https://cdn.discordapp.com/attachments/597985513701376013/867240581189337098/PaintSocial_Logo_Bigger.png" alt="PaintSocialLogo"/> */}
            <img src="https://creatr-seed.s3.amazonaws.com/paintsmile-transparent.gif" alt="paintbrushisbroken" />
            <img className="paintsocialtitle" src="https://creatr-seed.s3.amazonaws.com/PaintSocialTitle.gif" alt="paintbrushisbroken" />
            {/* </Link> */}
        </div>
        <div className='splashMessage'>A painting-based social network, Paint Social allows you to express yourself through painting and connect with others through art.</div>
        <br/>
        <br/>
        <div>
        <Link to={'/signup'}><button className="splashPageStart">Create an Account</button></Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
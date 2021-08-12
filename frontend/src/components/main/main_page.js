import React from 'react';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

  render() {
    return (
      <div className="frontlogowrapper">
        <div className="front-logo">
          {/* <Link to="/"> */}
          {/* <img src="https://cdn.discordapp.com/attachments/597985513701376013/867240581189337098/PaintSocial_Logo_Bigger.png" alt="PaintSocialLogo"/> */}
          <img className="paintbrush" src="https://creatr-seed.s3.amazonaws.com/paintsmile-transparent3.gif" alt="paintbrushisbroken" />
          <img className="paintsocialtitle" src="https://creatr-seed.s3.amazonaws.com/PaintSocialTitle.gif" alt="paintbrushisbroken" />
          {/* </Link> */}
        </div>
        <div className='splashMessage'>A painting-based social network, Paint Social allows you to express yourself through painting and connect with others through art.</div>
        <br />
        <br />
        <div>
          <Link to={'/signup'}><button className="splashPageStart">Create an Account</button></Link>
        </div>
        <div className="splashProfiles">Meet the Team!
          <div className="profile">Christian Miguel Dela Cruz
            <img className="picture" src="https://cdn.discordapp.com/attachments/865977609330753600/875463472530481233/miggs.jpeg" alt="miguelpicture"/>
            <div className="links">
              <a href="https://www.linkedin.com/in/christian-miguel-dela-cruz-724656218/">LinkedIn</a>
              <a href="">AngelList</a>
            </div>
          </div>
          <div className="profile">Kin Ka Tse
            <img className="picture" src="https://cdn.discordapp.com/attachments/865977609330753600/875463470777270293/kinka.png" alt="kinpicture"/>
            <div className="links">
              <a href="https://www.linkedin.com/in/kin-ka-tse/">LinkedIn</a>
              <a href="https://angel.co/u/kin-ka-tse">AngelList</a>
            </div>
          </div>
          <div className="profile">Eric Tran
            <img className="picture" src="https://cdn.discordapp.com/attachments/865977609330753600/875463458513117184/eric.png" alt="ericpicture"/>
            <div className="links">
              <a href="https://www.linkedin.com/in/eric-tran-6aab70130/">LinkedIn</a>
              <a href="">AngelList</a>
            </div>
          </div>
          <div className="profile">Justin Ernst
            <img className="picture" src="" alt="justinpicutre"/>
            <div className="links">
              <a href="https://www.linkedin.com/in/justin-ernst-a0ab10156/">LinkedIn</a>
              <a href="">AngelList</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
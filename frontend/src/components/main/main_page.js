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
        <h2>Meet the Team!</h2>
        <div className="splashProfiles">
          <div className="profile">Christian Miguel Dela Cruz
            <img className="picture" src="https://cdn.discordapp.com/attachments/865977609330753600/875463472530481233/miggs.jpeg" alt="miguelpicture"/>
            <div className="links">
              <a href="https://www.linkedin.com/in/christian-miguel-dela-cruz-724656218/">
              <i class="fab fa-linkedin"></i>LinkedIn
              </a>
              <i class="fab fa-angellist"></i>
              <a href="">AngelList</a>
              <i class="fab fa-github"></i>
              <a href="https://github.com/migs-dc">Github</a>
            </div>
          </div>
          <div className="profile">Kin Ka Tse
            <img className="picture" src="https://cdn.discordapp.com/attachments/865977609330753600/875463470777270293/kinka.png" alt="kinpicture"/>
            <div className="links">
              <i class="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/kin-ka-tse/">LinkedIn</a>
              <i class="fab fa-angellist"></i>
              <a href="https://angel.co/u/kin-ka-tse">AngelList</a>
              <i class="fab fa-github"></i>
              <a href="https://github.com/kinkatse">Github</a>
            </div>
          </div>
          <div className="profile">Eric Tran
            <img className="picture" src="https://cdn.discordapp.com/attachments/865977609330753600/875463458513117184/eric.png" alt="ericpicture"/>
            <div className="links">
              <i class="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/eric-tran-6aab70130/">LinkedIn</a>
              <i class="fab fa-angellist"></i>
              <a href="">AngelList</a>
              <i class="fab fa-github"></i>
              <a href="https://github.com/eric-tran2">Github</a>
            </div>
          </div>
          <div className="profile">Justin Ernst
            <img className="picture" src="" alt="justinpicutre"/>
            <div className="links">
              <i class="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/justin-ernst-a0ab10156/">LinkedIn</a>
              <i class="fab fa-angellist"></i>
              <a href="">AngelList</a>
              <i class="fab fa-github"></i>
              <a href="https://github.com/humormee">Github</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
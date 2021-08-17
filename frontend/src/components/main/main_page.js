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
          <div className="topshine">
            <img src="https://cdn.discordapp.com/attachments/597985513701376013/876978725521084426/Shineeffect.png"/>
          </div>
          <div className="topbackground">
            <img src="https://media.discordapp.net/attachments/597985513701376013/877025834395897896/paintmeetteambackground5.png"/>
          </div>
        </div>
        <div>
          <Link to={'/signup'}><button className="splashPageStart">Create an Account</button></Link>
        </div>
        <div className='splashMessage'>A painting-based social network, Paint Social allows you to express yourself through painting and connect with others through art.</div>
        <h2 className="meet">Meet the Team!</h2>
        <div className="splashProfiles">
          <div className="profile">
            <div className="left">
            <img className="picture" src="https://cdn.discordapp.com/attachments/865977609330753600/875463472530481233/miggs.jpeg" alt="miguelpicture"/>
            <span className="names">Christian Miguel Dela Cruz
              <div className="description">Worked on frontend with a perfect smile</div>
              <div className="links">
              <a href="https://www.linkedin.com/in/christian-miguel-dela-cruz-724656218/">
                <i class="fab fa-linkedin"></i>
                <span className="social">LinkedIn</span>
              </a>
              <a href="">
                <i class="fab fa-angellist"></i>
                <span className="social">AngelList</span>
              </a>
              <a href="https://github.com/migs-dc">
                <i class="fab fa-github"></i>
                <span className="social">Github</span>
              </a>
            </div>
            </span>
            <div className="background1">
              <img src="https://media.discordapp.net/attachments/597985513701376013/877022518777614446/paintmeetteambackground6.png"/>
            </div>
            <div className="shine">
              <img src="https://cdn.discordapp.com/attachments/597985513701376013/876978725521084426/Shineeffect.png"/>
            </div>
            </div>
          </div>

          <div className="profile">
            <div className="right">
            <img className="picture" src="https://cdn.discordapp.com/attachments/865977609330753600/875463470777270293/kinka.png" alt="kinpicture"/>
            <span className="names">Kin Ka Tse
              <div className="description">Worked flexibly for maximum creativity</div>
              <div className="links">
              <a href="https://www.linkedin.com/in/kin-ka-tse/">
                <i class="fab fa-linkedin"></i>
                <span className="social">LinkedIn</span>
              </a>
              <a href="https://angel.co/u/kin-ka-tse">
                <i class="fab fa-angellist"></i>
                <span className="social">AngelList</span>
              </a>
              <a href="https://github.com/kinkatse">
                <i class="fab fa-github"></i>
                <span className="social">Github</span>
              </a>
            </div>
            </span>
            <div className="background2">
              <img src="https://cdn.discordapp.com/attachments/597985513701376013/876943715959177266/paintmeetteambackground2.png"/>
            </div>
            <div className="shine">
              <img src="https://cdn.discordapp.com/attachments/597985513701376013/876978725521084426/Shineeffect.png"/>
            </div>
            </div>
          </div>

          <div className="profile">
            <div className="left">
            <img className="picture" src="https://cdn.discordapp.com/attachments/865977609330753600/875463458513117184/eric.png" alt="ericpicture"/>
            <span className="names">Eric Tran
              <div className="description">Worked on backend using willpower</div>
              <div className="links">
              <a href="https://www.linkedin.com/in/eric-tran-6aab70130/">
                <i class="fab fa-linkedin"></i>
                <span className="social">LinkedIn</span>
              </a>
              <a href="https://angel.co/u/eric-tran-28">
                <i class="fab fa-angellist"></i>
                <span className="social">AngelList</span>
              </a>
              <a href="https://github.com/eric-tran2">
                <i class="fab fa-github"></i>
                <span className="social">Github</span>
              </a>
            </div>
            </span>
            <div className="background3">
              <img src="https://media.discordapp.net/attachments/597985513701376013/877026113807867954/paintmeetteambackground3.png"/>
            </div>
            <div className="shine">
              <img src="https://cdn.discordapp.com/attachments/597985513701376013/876978725521084426/Shineeffect.png"/>
            </div>
            </div>
          </div>

          <div className="profile">
            <div className="right">
            <img className="picture" src="https://cdn.discordapp.com/attachments/865977609330753600/876950806958575637/Justin.png" alt="justinpicture"/>
            <span className="names">Justin Ernst
              <div className="description">Lead the team with a fierce fist</div>
              <div className="links">
              <a href="https://www.linkedin.com/in/justin-ernst-a0ab10156/">
                <i class="fab fa-linkedin"></i>
                <span className="social">LinkedIn</span>
              </a>
              <a href="https://angel.co/u/justin-ernst">
                <i class="fab fa-angellist"></i>
                <span className="social">AngelList</span>
              </a>
              <a href="https://github.com/humormee">
                <i class="fab fa-github"></i>
                <span className="social">Github</span>
              </a>
            </div>
            </span>
            <div className="background4">
              <img src="https://media.discordapp.net/attachments/597985513701376013/877026115565281320/paintmeetteambackground4.png"/>
            </div>
            <div className="shine">
              <img src="https://cdn.discordapp.com/attachments/597985513701376013/876978725521084426/Shineeffect.png"/>
            </div>
            </div>
          </div>

        </div>

        {/* <script language="javascript" type="text/javascript" src="./show-on-scroll.js"></script> */}
      </div>
    );
  }
}

export default MainPage;
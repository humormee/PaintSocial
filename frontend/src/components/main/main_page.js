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
<<<<<<< HEAD
        
=======
        <h2 className="meet">Meet the Team!</h2>
>>>>>>> Splash-Styling
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
            <div className="background">
              <img src="https://cdn.discordapp.com/attachments/597985513701376013/876943715959177266/paintmeetteambackground2.png"/>
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
            <div className="background">
              <img src="https://cdn.discordapp.com/attachments/597985513701376013/876943715959177266/paintmeetteambackground2.png"/>
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
              <a href="">
                <i class="fab fa-angellist"></i>
                <span className="social">AngelList</span>
              </a>
              <a href="https://github.com/eric-tran2">
                <i class="fab fa-github"></i>
                <span className="social">Github</span>
              </a>
            </div>
            </span>
            <div className="background">
              <img src="https://cdn.discordapp.com/attachments/597985513701376013/876943715959177266/paintmeetteambackground2.png"/>
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
              <a href="">
                <i class="fab fa-angellist"></i>
                <span className="social">AngelList</span>
              </a>
              <a href="https://github.com/humormee">
                <i class="fab fa-github"></i>
                <span className="social">Github</span>
              </a>
            </div>
            </span>
            <div className="background">
              <img src="https://cdn.discordapp.com/attachments/597985513701376013/876943715959177266/paintmeetteambackground2.png"/>
            </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default MainPage;
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoLogin(){
    this.setState({
      ['email']: 'demoUser@paintsocial.com',
      ['password']: 'password'
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="form-background">
        <div className="login-form">
          <Link to="/">
            <i class="fas fa-times"></i>
          </Link>
          <img 
            className="login-logo"
            src="https://media.discordapp.net/attachments/865977609330753600/871755565951500358/PaintSocial_Logo_Revamped_7.png?width=705&height=410"/>

          <form onSubmit={this.handleSubmit}>
            <div className="form">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <input type="submit" value="Login" className="submit"/>
              {/* <br /> */}
              {/* <div className="demobutton"> */}
              <button onClick={this.demoLogin} className="demobutton" >Demo</button>
              {/* </div> */}
              {this.renderErrors()}
            </div>
            <br/>
            <div>
              <span className="account">Don't have an account yet? </span>
              <Link to='/signup' className='alreadyMember'>Sign Up</Link></div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
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
      <div>
        <div className="login-form">
          {/* <div className="formbacklog">
            <img src="https://cdn.discordapp.com/attachments/597985513701376013/867246418484658176/Form_Background.png" alt="formbackground">
            </img>
          </div> */}
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
            <div>Don't have an account yet? <Link to='/signup' className='alreadyMember'>Sign Up</Link></div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
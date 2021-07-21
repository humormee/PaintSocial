import React from 'react';
import { withRouter } from 'react-router-dom';

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
          <div className="formbacklog">
            <img src="https://cdn.discordapp.com/attachments/597985513701376013/867246418484658176/Form_Background.png" alt="formbackground">
            </img>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <br />
              <input type="submit" value="Submit" className="submit"/>
              {this.renderErrors()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
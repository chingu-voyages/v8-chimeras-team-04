import React, { Component } from 'react'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    // Connect with DB
  }

  isNotBlank() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  render() {
    const { username, password } = this.state
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label name="email">Email: </label>
          <input 
            id="username"
            type="text" 
            name="email" 
            value={username}
            onChange={this.handleChange}
          />
          <label name="password">Password: </label>
          <input 
            id="password"
            type="password" 
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button 
            type="submit"
            disabled={!this.isNotBlank()}
          >
            Login
          </button>
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Login;

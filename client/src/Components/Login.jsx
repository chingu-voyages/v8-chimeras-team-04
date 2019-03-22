// import React, { Component } from 'react'
import React, { useState } from 'react';

export default function Login() {
  const [ username, setUsername ] = useState();
  const [ password, setPassword ] = useState();

  return (
    <div className="login">
      <LoginForm setUsername={setUsername} setPassword={setPassword} />
      {console.log(username, password)}
    </div>
  )
}

function LoginForm({ setUsername, setPassword }) {
  const [ value, setValue ] = useState();
  const [ pw, setPw ] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    if(value.length < 4 && pw.length < 4) return;
    setUsername(value);
    setPassword(pw);
    setValue('');
    setPw('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <input 
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <label>Password: </label>
      <input
        type="password"
        value={pw}
        onChange={e => setPw(e.target.value)}
      />
      <button onClick={handleSubmit}>Log In</button>
    </form>
  )
}




// export class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//     }
//   }

//   handleChange = e => {
//     this.setState({
//       [e.target.id]: e.target.value
//     })
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     // Connect with DB
//   }

//   isNotBlank() {
//     return this.state.username.length > 0 && this.state.password.length > 0;
//   }

//   render() {
//     const { username, password } = this.state
//     return (
//       <div className="login">
//         <form onSubmit={this.handleSubmit}>
//           <label name="email">Email: </label>
//           <input 
//             id="username"
//             type="text" 
//             name="email" 
//             value={username}
//             onChange={this.handleChange}
//           />
//           <label name="password">Password: </label>
//           <input 
//             id="password"
//             type="password" 
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//           <button 
//             type="submit"
//             disabled={!this.isNotBlank()}
//           >
//             Login
//           </button>
//           <button>Sign Up</button>
//         </form>
//       </div>
//     )
//   }
// }

// export default Login;

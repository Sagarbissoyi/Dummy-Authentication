import React, { useState } from 'react';

const Signup = ({ setUser, setIsSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = () => {
    // Mock sign-up functionality
    const newUser = {
      id: new Date().getTime(),
      username: username,
      password: password,
      email: email,
      token: 'mocked-token',
    };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  return (
    <div className="signup-container">
      <h2>Create an account</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>SIGN UP</button>
      {error && <p className="error">{error}</p>}
      <p>Already have an account? <span className="login-link" onClick={() => setIsSignup(false)}>Log in</span></p>
    </div>
  );
};

export default Signup;

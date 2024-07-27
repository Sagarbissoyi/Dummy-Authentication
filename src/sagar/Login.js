import React, { useState } from 'react';

const Login = ({ setUser, setIsSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('user', JSON.stringify(data));
          setUser(data);
        } else {
          setError(data.message);
        }
      })
      .catch(err => setError('An error occurred. Please try again.'));
  };

  return (
    <div className="login-container">
      <h2>Welcome back! 👋</h2>
      <h3>Sign in to your account</h3>
      <input
        type="text"
        placeholder="Your email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>CONTINUE</button>
      {error && <p className="error">{error}</p>}
      <p className="forgot-password" onClick={() => alert('Forgot password functionality is not implemented')}>Forgot your password?</p>
      <p>Don't have an account? <span className="signup-link" onClick={() => setIsSignup(true)}>Sign up</span></p>
    </div>
  );
};

export default Login;

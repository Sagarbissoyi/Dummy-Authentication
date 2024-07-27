import React, { useState, useEffect } from 'react';
import Login from './sagar/Login';
import Profile from './sagar/Profile';
import Signup from './sagar/Signup';

const App = () => {
  const [user, setUser] = useState(null);
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="app">
      {user ? (
        <Profile user={user} setUser={setUser} />
      ) : (
        isSignup ? (
          <Signup setUser={setUser} setIsSignup={setIsSignup} />
        ) : (
          <Login setUser={setUser} setIsSignup={setIsSignup} />
        )
      )}
    </div>
  );
};

export default App;

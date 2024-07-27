import React, { useEffect, useState } from 'react';

const Profile = ({ user, setUser }) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user.id}`)
      .then(res => res.json())
      .then(data => {
        setProfileData(data);
        localStorage.setItem('profile', JSON.stringify(data));
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch profile data", err);
        setLoading(false);
      });
  }, [user.id]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('profile');
    setUser(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!profileData) {
    return <p>Error loading profile data.</p>;
  }

  const maskEmail = (email) => {
    if (!email) return '';
    const [user, domain] = email.split('@');
    const maskedUser = user.slice(0, 2) + '***' + user.slice(-1);
    return `${maskedUser}@${domain}`;
  };

  const maskPhone = (phone) => {
    if (!phone) return '';
    return phone.slice(0, 2) + '****' + phone.slice(-2);
  };

  const maskedEmail = maskEmail(profileData.email);
  const maskedPhone = maskPhone(profileData.phone);

  return (
    <div className="profile-container">
      <h2>Welcome, {profileData.firstName} {profileData.lastName}</h2>
      <p><strong>Email:</strong> {maskedEmail}</p>
      <p><strong>Username:</strong> {profileData.username}</p>
      <p><strong>Phone:</strong> {maskedPhone}</p>
      {profileData.address && (
        <p><strong>Address:</strong> {profileData.address.address}, {profileData.address.city}, {profileData.address.state}</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;

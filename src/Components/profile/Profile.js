import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <img src={user.avatar} alt={user.name} width="200" />
      <p>{user.name}</p>
      <p>@{user.tag}</p>
      <p>{user.location}</p>
      <ul>
        {Object.entries(user.stats).map(stats => {
          return (
            <li key={stats[0]}>
              <span>{stats[0]} </span>
              <span>{stats[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;

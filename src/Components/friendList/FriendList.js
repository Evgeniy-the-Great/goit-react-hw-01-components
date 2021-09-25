import PropTypes from 'prop-types';
import React from 'react';
import style from './FriendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.List}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={style.Item}>
            <span
              className={friend.isOnline ? style.Online : style.Offline}
            ></span>
            <img
              src={friend.avatar}
              alt={friend.name}
              width="100"
              className={style.Img}
            />
            <p className={style.Name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendList;

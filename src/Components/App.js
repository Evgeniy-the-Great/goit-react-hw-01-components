import React from 'react';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';
import data from '../data';

const App = () => {
  return (
    <>
      <Profile user={data.user} />
      <Statistics statistic={data.statistic} />
      <FriendList friends={data.friends} />
      <TransactionHistory transactions={data.transactions} />
    </>
  );
};

export default App;

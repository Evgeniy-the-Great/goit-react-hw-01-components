import React from 'react';

const Statistic = ({ title = 'Upload Stats', statistic }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {statistic.map(start => {
          return (
            <li key={start.id}>
              <span>{start.label}</span>
              <span>{start.percentage}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Statistic;

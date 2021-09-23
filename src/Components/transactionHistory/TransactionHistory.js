import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(trans => {
          return (
            <tr key={trans.id}>
              <td>{trans.type}</td>
              <td>{trans.amount}</td>
              <td>{trans.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

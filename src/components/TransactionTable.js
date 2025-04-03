import React from "react";
import PropTypes from 'prop-types';

const TransactionTable = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>Customer Name</th>
          <th>Purchase Date</th>
          <th>Product</th>
          <th>Price</th>
          <th>Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.transactionId}>
            <td>{transaction.transactionId}</td>
            <td>{transaction.name}</td>
            <td>{transaction.date}</td>
            <td>{transaction.product}</td>
            <td>${transaction.price}</td>
            <td>{transaction.rewardPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      transactionId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      product: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rewardPoints: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TransactionTable;
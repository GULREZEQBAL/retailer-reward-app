import React from "react";
import PropTypes from 'prop-types';

const TotalRewardsTable = ({ totalRewards }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Total Reward Points</th>
        </tr>
      </thead>
      <tbody>
        {totalRewards.map((reward, index) => (
          <tr key={index}>
            <td>{reward.name}</td>
            <td>{reward.totalPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TotalRewardsTable.propTypes = {
  totalRewards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      totalPoints: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TotalRewardsTable;